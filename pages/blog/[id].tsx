import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogById, getAllBlogIds, Blog } from '@/lib/blog';
import styles from '@/styles/BlogDetail.module.css';

type Props = {
  blog: Blog;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default function BlogDetail({ blog }: Props) {
  const description = (blog.html || blog.content)
    .substring(0, 150)
    .replace(/<[^>]*>/g, '');

  return (
    <>
      <Head>
        <title>{`${blog.title} | ブログ - union`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={description} />
        {blog.eyecatch && <meta property="og:image" content={blog.eyecatch.url} />}
        <meta property="og:type" content="article" />
      </Head>

      <Header />

      <main className={styles.blogDetail}>
        <header className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroInner}>
            <Link href="/blog" className={styles.back}>
              <span aria-hidden="true">←</span>
              Journal
            </Link>

            <div className={styles.heroMeta}>
              <span className={styles.heroMetaLine} aria-hidden="true" />
              {blog.category && (
                <span className={styles.heroCategory}>{blog.category.name}</span>
              )}
              <time className={styles.heroDate}>{formatDate(blog.publishedAt)}</time>
            </div>

            <h1 className={styles.heroTitle}>{blog.title}</h1>
          </div>
        </header>

        {blog.eyecatch && (
          <div className={styles.eyecatchWrap}>
            <div className={styles.eyecatch}>
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                fill
                sizes="(max-width: 1100px) 100vw, 1080px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        )}

        <article className={styles.article}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: blog.html || blog.content }}
          />

          <footer className={styles.articleFooter}>
            <Link href="/blog" className={styles.backBottom}>
              <span aria-hidden="true">←</span>
              すべての記事を見る
            </Link>
          </footer>
        </article>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getAllBlogIds();

  const paths = ids.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id || typeof params.id !== 'string') {
    return { notFound: true };
  }

  const blog = await getBlogById(params.id);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: { blog },
  };
};
