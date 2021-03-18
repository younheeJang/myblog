
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/layout.module.css'
import DateClock from '../components/DateClock'

const name = 'CURIOUS JEAGER'
const pageTitle = 'SHOPPING'


export default function Shopping() {
  return (
    <>
    <div className="bg-hero-pattern bg-cover sticky top-0">
        <div className={styles.container}>
          <Head>
            <title>SHOPPING</title>
            <link rel="icon" href="/heart.ico" />
            <meta name="title" property="og:title" content="next/index" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="shopping" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/shop/items" key="ogurl" />
        </Head>
        <header className={styles.header}>
            <DateClock />
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
   
    <div className={styles.container}>
    <div className="py-4 px-4 block md:flex justify-between md:-mx-2">
      <div className="w-full lg:w-1/2 md:mx-2 mb-4 md:mb-0">
        <div className="bg-white rounded-lg shadow overflow-hidden"> 
          <div className="p-4 h-auto md:h-40 lg:h-48">
            <a href="/nv/search/blogposts" className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Search Naver Blog Posts
            </a>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              With: Next.js(SWR), Naver Api, tailwindcss
            </div>
            <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#SWR</a>
              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#Naver Api</a>
            </div>
          </div>
        </div>
      
      </div>
      <div className="w-full lg:w-1/2 md:mx-2 mb-4 md:mb-0">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 h-auto md:h-40 lg:h-48">
            <a href="/tui/editor" className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Post with Tui Editor
            </a>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              With: Next.js(Router), Toast editor, tailwindcss
            </div>
            <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#tui</a>
              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#tailwind</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
</>
    
  )
}