import CreateNewUser from '@/component/user/create-user';
import Head from 'next/head';
import React, { Fragment } from 'react';

export default function updateUser() {
  return (
    <div>
      <Fragment>
        <Head>
          <title>Tambah Data</title>
          <meta name="descripsi" content="deskripsi" />
        </Head>
        <CreateNewUser />
      </Fragment>
    </div>
  );
}
