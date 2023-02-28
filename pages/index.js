import BlogList from '@/component/blog/blog-list';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <BlogList Blog={props.data} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://gorest.co.in/public/v2/posts');
  console.log(res);
  const data = await res.json();

  return { props: { data } };
}
