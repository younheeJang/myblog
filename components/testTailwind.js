import Head from 'next/head'
import Image from 'next/image'
import examCss from '../styles/exam.module.css'


export default function TestTailwind() {
    return (
        <>
        <Head>
          <title >NEXT/HEAD</title>
          <link rel="icon" href="/heart.ico" />
          <meta name="title" property="og:title" content="next/head" key="ogtitle" />
          <meta
            name="description"
            property="og:description"
            content="example on next/head" key="ogdes" />
          <meta name="image" property="og:image" content="/images/heart.webp" key="ogimage" />
          <meta name="url" property="og:url" content="http://localhost:3000/exam/head" key="ogurl" />
        </Head>

        <div className={examCss.flexCenter}>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 pt-8 pl-8">
                    <Image
                        className="h-48 w-full object-cover md:w-48"
                        priority
                        src="/images/heart.webp"
                        width={100}
                        height={100}
                    />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }