
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/layout.module.css'
import DateClock from '../components/utils/DateClock'
import Link from 'next/link'
const name = 'CURIOUS JEAGER'
const pageTitle = 'My Blog'


export default function Home() {
  return (
    <>
    <Head>
            <title>CURIOUS JEAGER</title>
            <link rel="icon" href="/LOGO.ico" />
            <meta name="title" property="og:title" content="next/index" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="my blog" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/" key="ogurl" />
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
    <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">        
            <Link href='/nv/search/blogposts' key='/nv/search/blogposts'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5 cursor-pointer">
                    <div className="md:flex">
                        <div className="p-4">
                            <div className="uppercase tracking-wide block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">Search Naver Blog Posts</div>
                            <a href="#" className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">With: Next.js(SWR), Naver Api, tailwindcss</a>
                            <p className="mt-2 text-black">Typing what you want to Search, then Naver api answer your request.</p>
                            <div className="mt-4 bottom-1 lg:block">
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#SWR</a>
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#Naver</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href='/tui/editor' key='/tui/editor'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5 cursor-pointer">
                    <div className="md:flex">
                        <div className="p-4">
                            <div className="uppercase tracking-wide block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">Post with Tui Editor</div>
                            <a href="#" className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">With: Next.js(Router), Toast editor, tailwindcss</a>
                            <p className="mt-2 text-black">Write Your Story, then Tui editor show your story on their viewer.</p>
                            <div className="mt-4 bottom-1 lg:block">
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#tui</a>
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#tailwind</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href='/chat/engine' key='/chat/engine'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5 cursor-pointer">
                    <div className="md:flex">
                        <div className="p-4">
                            <div className="uppercase tracking-wide block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">React Chat Engine</div>
                            <a href="#" className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">With: Next.js(SWR), Naver Api, tailwindcss</a>
                            <p className="mt-2 text-black">Login to Chat Engine, and Start Chat with Your Friends.</p>
                            <p className="mt-2 text-black text-sm">[User 1: ID -> CURIOUS , PW -> 123123]</p>
                            <p className="mt-2 text-black text-sm">[User 2: ID -> JEAGER, PW -> 123123]</p>
                            <div className="mt-4 bottom-1 lg:block">
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#chat</a>
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#react</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href='/responsive/header' key='/responsive/header'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5 cursor-pointer">
                    <div className="md:flex">
                        <div className="p-4">
                            <div className="uppercase tracking-wide block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">Responsive Header with LOGO.</div>
                            <a href="#" className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">With: Next.js, tailwindcss</a>
                            <p className="mt-2 text-black">Click, then You'll see Perfectily responsive header.</p>
                            <div className="mt-4 bottom-1 lg:block">
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#header</a>
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#responsive</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href='/shop/items' key='/shop/items'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5 cursor-pointer">
                    <div className="md:flex">
                        <div className="p-4">
                            <div className="uppercase tracking-wide block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">Page with KAKAOPAY Api.</div>
                            <a href="#" className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">With: Next.js, KakapPay Icon, tailwindcss</a>
                            <p className="mt-2 text-black">Test Pay Approved Only.</p>
                            <div className="mt-4 bottom-1 lg:block">
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#kakaopay</a>
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href='/todo/list' key='/todo/list'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5 cursor-pointer">
                    <div className="md:flex">
                        <div className="p-4">
                            <div className="uppercase tracking-wide block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">Page TodoList.</div>
                            <a href="#" className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">With: Next.js, TypeScript, tailwindcss</a>
                            <p className="mt-2 text-black">Todo</p>
                            <div className="mt-4 bottom-1 lg:block">
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#typescript</a>
                              <a className="inline bg-gray-200 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    </div>
</>
    
  )
}