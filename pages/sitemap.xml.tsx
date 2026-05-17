import type { GetServerSideProps } from 'next';
import { getAllBlogs } from '@/lib/blog';
import { products } from '@/lib/products';
import { SITE_URL } from '@/lib/siteUrl';

type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(urls: SitemapUrl[]): string {
  const body = urls
    .map((u) => {
      const parts = [`    <loc>${escapeXml(u.loc)}</loc>`];
      if (u.lastmod) parts.push(`    <lastmod>${u.lastmod}</lastmod>`);
      if (u.changefreq) parts.push(`    <changefreq>${u.changefreq}</changefreq>`);
      if (u.priority) parts.push(`    <priority>${u.priority}</priority>`);
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages: Array<{ path: string; changefreq: SitemapUrl['changefreq']; priority: string }> = [
    { path: '/',         changefreq: 'weekly',  priority: '1.0' },
    { path: '/services', changefreq: 'weekly',  priority: '0.9' },
    { path: '/company',  changefreq: 'monthly', priority: '0.7' },
    { path: '/contact',  changefreq: 'monthly', priority: '0.6' },
    { path: '/blog',     changefreq: 'weekly',  priority: '0.9' },
  ];

  const staticUrls: SitemapUrl[] = staticPages.map((p) => ({
    loc: `${SITE_URL}${p.path}`,
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  const productUrls: SitemapUrl[] = products.map((p) => ({
    loc: `${SITE_URL}/services/${p.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const blogs = await getAllBlogs();
  const blogUrls: SitemapUrl[] = blogs.map((b) => ({
    loc: `${SITE_URL}/blog/${b.id}`,
    lastmod: new Date(b.updatedAt).toISOString(),
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const sitemap = buildSitemap([...staticUrls, ...productUrls, ...blogUrls]);

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.write(sitemap);
  res.end();

  return { props: {} };
};
