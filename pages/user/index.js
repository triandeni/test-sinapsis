import Users from '@/component/user/user';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

function User(props) {
  return (
    <Fragment>
      <Head>
        <title>Add a new meetups</title>
        <meta
          name="description"
          content="Add your meetups and create amazing networking opportunities"
        />
      </Head>
      <Users user={props.data} />
    </Fragment>
  );
}
export default User;

export async function getStaticProps() {
  const res = await fetch('https://gorest.co.in/public/v2/users');
  const data = await res.json();
  console.log(data);

  return { props: { data } };
}
