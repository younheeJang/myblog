import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import styles from '../../../styles/layout.module.css'
import DateClock from '../../../components/utils/DateClock'
import { ConsoleLog } from '../../../lib/ts/utils'

const name = 'CURIOUS JEAGER'
const pageTitle = 'Practice TS Function.'


export default function TSpracFunction({}) {

    return(
        <>
            <Head>
            <title>TSpracPage</title>
            <link rel="icon"  href="/LOGO.ico" />
            <meta name="title" property="og:title" content="TS" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="practice TS" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/ts/prac/function" key="ogurl" />
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
   
            
      <div className="p-8">
        {ConsoleLog(["curious", "jeager"])}
      </div>
           
        </>
    )
}