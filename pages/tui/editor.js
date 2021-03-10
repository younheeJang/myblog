import dynamic from 'next/dynamic'
import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import DateClock from '../../components/DateClock'
import Image from 'next/image'
import Head from 'next/head'

const TuiEditor = dynamic(
  () => import('../../components/TuiEditor'),
  { ssr: false }
)

export default function PostWithTuiEditor({}) {

    return(
        <>
            <Head>
            <title>WYSIWYG</title>
            <link rel="icon" href="/heart.ico" />
            <meta name="title" property="og:title" content="next/wysiwyg/W" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="page for using wysiwyg" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/tui/editor" key="ogurl" />
            </Head>
            <div className="bg-purple-600 bg-opacity-25 sticky top-0">
                <div className={styles.container}>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-1 col-span-5">
                            <div className="float-left">
                                <div className="mt-0.5 ml-1.5 mr-2">
                                    <Image
                                    priority
                                    src="/images/profile.jpeg"
                                    className={utilStyles.borderCircle}
                                    height={24}
                                    width={24}
                                    />
                                </div>
                            </div>
                            <DateClock />
                        </div>
                        <div className="col-end-7 col-span-1">
                            <div className="relative">
                                <div className="absolute right-0 m-1.5">
                                    <img src="/images/upload.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <TuiEditor/>
            </div>
        </>
    )
}