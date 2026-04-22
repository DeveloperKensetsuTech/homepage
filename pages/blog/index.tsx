import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { getAllBlogs, Blog } from '@/lib/blog';
import styles from '@/styles/Blog.module.css';

type Props = {
  blogs: Blog[];
};

function formatDate(iso: string) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return { full: `${y}.${m}.${day}`, year: String(y), month: m };
}

export default function BlogList({ blogs }: Props) {
  const categories = blogs
    .filter((blog) => blog.category)
    .reduce((acc, blog) => {
      if (blog.category && !acc.find((c) => c.id === blog.category!.id)) {
        acc.push(blog.category);
      }
      return acc;
    }, [] as { id: string; name: string }[]);

  const archives = blogs.reduce((acc, blog) => {
    const date = new Date(blog.publishedAt);
    const yearMonth = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!acc.find((a) => a.key === key)) {
      acc.push({ key, label: yearMonth, count: 1 });
    } else {
      acc.find((a) => a.key === key)!.count++;
    }
    return acc;
  }, [] as { key: string; label: string; count: number }[]);

  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <>
      <Head>
        <title>ブログ | union - 株式会社main character</title>
        <meta
          name="description"
          content="現場の業務改善やプロダクトに関する情報を発信しています。"
        />
        <meta
          name="keywords"
          content="union,SaaS,現場,建設業,福祉,業務改善,プロダクト"
        />
      </Head>

      <Header />
      <PageHero
        eyebrow="Journal — ブログ"
        title="現場からの、小さな発信"
        subtitle="プロダクトの裏側、現場の気づき、DX の実践。<br />unionチームが日々考えていることを、言葉にして残しています。"
      />

      <main className={styles.blogMain}>
        <div className={styles.container}>
          {blogs.length === 0 ? (
            <div className={styles.empty}>
              <p>まだ記事はありません。</p>
              <p className={styles.emptySub}>近いうちに、現場の声をお届けします。</p>
            </div>
          ) : (
            <>
              {(categories.length > 0 || archives.length > 0) && (
                <nav className={styles.filterBar} aria-label="記事フィルター">
                  {categories.length > 0 && (
                    <div className={styles.filterGroup}>
                      <span className={styles.filterLabel}>Category</span>
                      <ul className={styles.filterList}>
                        {categories.map((c) => (
                          <li key={c.id}>
                            <Link href={`/blog?category=${c.id}`} className={styles.filterLink}>
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {archives.length > 0 && (
                    <div className={styles.filterGroup}>
                      <span className={styles.filterLabel}>Archive</span>
                      <ul className={styles.filterList}>
                        {archives.map((a) => (
                          <li key={a.key}>
                            <Link href={`/blog?archive=${a.key}`} className={styles.filterLink}>
                              {a.label}
                              <span className={styles.filterCount}>{a.count}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </nav>
              )}

              {featured && (
                <Link href={`/blog/${featured.id}`} className={styles.featured}>
                  <div className={styles.featuredMedia}>
                    {featured.eyecatch ? (
                      <Image
                        src={featured.eyecatch.url}
                        alt={featured.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 1200px"
                        priority
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className={styles.featuredMediaFallback} aria-hidden="true" />
                    )}
                    <span className={styles.featuredBadge}>Latest</span>
                  </div>
                  <div className={styles.featuredBody}>
                    <div className={styles.featuredMeta}>
                      {featured.category && (
                        <span className={styles.category}>{featured.category.name}</span>
                      )}
                      <time className={styles.date}>
                        {formatDate(featured.publishedAt).full}
                      </time>
                    </div>
                    <h2 className={styles.featuredTitle}>{featured.title}</h2>
                    <span className={styles.featuredArrow} aria-hidden="true">
                      Read article
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                        <line x1="3" y1="12" x2="19" y2="12" />
                        <path d="M14 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className={styles.listHead}>
                  <p className={styles.listLabel}>All entries</p>
                  <p className={styles.listCount}>
                    <span>{String(rest.length).padStart(2, '0')}</span>
                    <span className={styles.listCountDiv}>/</span>
                    <span>{String(blogs.length).padStart(2, '0')}</span>
                  </p>
                </div>
              )}

              <ol className={styles.entries}>
                {rest.map((blog, i) => {
                  const idx = String(i + 2).padStart(2, '0');
                  return (
                    <li key={blog.id} className={styles.entry}>
                      <Link href={`/blog/${blog.id}`} className={styles.entryLink}>
                        <span className={styles.entryIndex} aria-hidden="true">{idx}</span>
                        <div className={styles.entryBody}>
                          <div className={styles.entryMeta}>
                            <time className={styles.date}>
                              {formatDate(blog.publishedAt).full}
                            </time>
                            {blog.category && (
                              <span className={styles.category}>{blog.category.name}</span>
                            )}
                          </div>
                          <h3 className={styles.entryTitle}>{blog.title}</h3>
                        </div>
                        {blog.eyecatch && (
                          <div className={styles.entryMedia}>
                            <Image
                              src={blog.eyecatch.url}
                              alt={blog.title}
                              fill
                              sizes="(max-width: 900px) 40vw, 240px"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        )}
                        <span className={styles.entryArrow} aria-hidden="true">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const blogs = await getAllBlogs();

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return {
      props: {
        blogs: [],
      },
    };
  }
};
