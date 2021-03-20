import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/layout.module.css'
import utilStyles from '../../../styles/utils.module.css'
import DateClock from '../../../components/utils/DateClock'
import NvBlogPosts from '../../../components/nv/NvBlogPosts'


const name = 'CURIOUS JEAGER'
const pageTitle = 'Next.js + Redux + Naver > Search Api'

export default function SearchWithNv({}) {

  return (
    <>
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
      <div className="bg-white shadow-lg sticky top-0 grid place-items-center">
        <div className='max-w-xl p-4 '>
         
        <header className={styles.header}>
            <DateClock />
            <Image
              priority
              src="/images/LOGO.png"
              className={utilStyles.borderCircle}
              height={144}
              width={182}
              alt={name}
            />
          
            <h1>
                <div className="text-black font-black">{pageTitle}</div>
            </h1>
        </header>
      </div> 
    </div>
    
    <NvBlogPosts />
    </>  
  )
}