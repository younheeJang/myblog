import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'CURIOUS JEAGER'
export const siteTitle = 'Next.js Sample Website'

export default function Layout() {
  return (
    <div className={styles.container}>
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
      <header className={styles.header}>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
      </header>
      
    </div>
  )
}