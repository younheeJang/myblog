import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/layout.module.css'
import utilStyles from '../../../styles/utils.module.css'
import DateClock from '../../../components/DateClock'

import React, { useState, useEffect } from "react";

const name = 'CURIOUS JEAGER'
const pageTitle = 'Next.js > Static Generation + Naver > Search Api'

export default function SearchWithNv({}) {
  const [posts, setPostsData] = useState(null);

  let textInput = React.createRef();

  async function fetchPostsData() {
      const searchingWord = textInput.current.value;
      await fetch(`/api/posts/${searchingWord}`)
      //await setPostsData(returnNvPostsData);
  }
     


  return (
    <>
      <div className="bg-hero-pattern bg-cover sticky top-0">
        <div className={styles.container}>
          <Head>
            <title>NEXT/NvSearchApi</title>
            <link rel="icon" href="/heart.ico" />
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
    <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
        <div className="relative text-gray-600 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
        
            <input ref={textInput} type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4" onClick={fetchPostsData}>
                <Image width={15} height={15} src="/images/search-interface-symbol.png" className="h-4 w-4 fill-curren"></Image>
            </button>
        
        </div>
      {posts && posts.map(({ link, title, postdate, bloggername, description }) => (
        <Link href={link} key={link} className="cursor-pointer">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title.replace(/<[^>]*>?/gm, '')}</div>
                        <a href="#" className="block mt-1 text-xs leading-tight font-medium text-black text-right p-1">Wriiten by '{bloggername}', &nbsp; &nbsp;Posted at {postdate}</a>
                        <p className="mt-2 text-gray-500">{description.replace(/<[^>]*>?/gm, '')}</p>
                    </div>
                </div>
            </div>
        </Link>
      ))}
    </div>
   </>  
  )
}