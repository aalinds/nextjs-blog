import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>All Posts</title>
      </Head>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h1 className={utilStyles.headingXl}>{post.title}</h1>
          </Link>
          <div>{post.body}</div>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
