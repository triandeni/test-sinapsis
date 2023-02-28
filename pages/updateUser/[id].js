import UpdateUser from '@/component/user/update-user';
import Head from 'next/head';
import React, { Fragment } from 'react';

export default function updateUsers() {
  return (
    <div>
      <Fragment>
        <Head>
          <title>Edit Data</title>
          <meta name="descripsi" content="deskripsi" />
        </Head>
        <UpdateUser />
      </Fragment>
    </div>
  );
}
