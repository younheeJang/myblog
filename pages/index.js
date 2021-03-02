import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/layout.module.css'



const name = 'CURIOUS JEAGER'
const pageTitle = 'My Nextjs Blog'


export default function Home() {
  return (
    <div className="bg-hero-pattern bg-cover sticky top-0">
        <div className={styles.container}>
          <Head>
            <title>NEXT/INDEX</title>
            <link rel="icon" href="/heart.ico" />
            <meta name="title" property="og:title" content="next/index" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="my blog" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/" key="ogurl" />
        </Head>
        <header className={styles.header}>
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
  )
}
