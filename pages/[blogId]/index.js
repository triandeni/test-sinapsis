import BlogDetail from '@/component/blog/blog-detail/blog-detail';
import Head from 'next/head';
import React, { Fragment } from 'react';

export default function BlogId(props) {
  return (
    <div>
      <Fragment>
        <Head>
          <title>Judul</title>
          <meta name="descripsi" content="deskripsi" />
        </Head>
        <BlogDetail title={props.detailBlog.title} body={props.detailBlog.body} />
      </Fragment>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://gorest.co.in/public/v2/posts');
  const data = await res.json();

  return {
    fallback: 'blocking',
    paths: data.map((datas) => ({
      params: { blogId: datas.id.toString() },
    })),
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${params.blogId}`);
  const post = await res.json();

  return {
    props: {
      detailBlog: {
        id: post.id.toString(),
        title: post.title,
        body: post.body,
        userId: post.user_id,
      },
    },
  };
}
