import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/layout.module.css'
import utilStyles from '../../../styles/utils.module.css'
import DateClock from '../../../components/utils/DateClock'
import NvBlogPosts from '../../../components/nv/NvBlogPosts'

import React, { useState, useEffect } from "react";

const name = 'CURIOUS JEAGER'
const pageTitle = 'Next.js + Redux + Naver > Search Api'

export default function SearchWithNv({}) {
  const [posts, setPostsData] = useState(null);

  return (
    <>
      <div className="bg-hero-pattern bg-cover sticky top-0">
        <div className={styles.container}>
          <Head>
            <title>NvSearchApi</title>
            <link rel="icon" href="/LOGO.ico" />
            <meta name="title" property="og:title" content="next/sg" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="page using naver search api" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/nv/search" key="ogurl" />
        </Head>
        <header className={styles.header}>
            <DateClock/>  
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h2 className={utilStyles.headingLg}>         
                <div className="bg-opacity-50 text-gray-200">{name}</div>
            </h2>
            <h1>
                <div className="text-gray-200">{pageTitle}</div>
            </h1>
        </header>
      </div> 
    </div>
    <NvBlogPosts />
    </>  
  )
}