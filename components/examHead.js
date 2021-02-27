import Head from 'next/head'
import Image from 'next/image'
import examCss from '../styles/exam.module.css'


export default function ExamHead() {
    return (
        <>
        <Head>
          <title>NEXT/HEAD</title>
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
              <Image
                priority
                src="/images/heart.webp"
                height={144}
                width={144}
              />
        </div>
        </>
    )
  }