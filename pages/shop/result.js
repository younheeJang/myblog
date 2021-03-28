
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/layout.module.css'
import DateClock from '../../components/utils/DateClock'
import ShowPaymentResult from '../../components/kko/ShowPaymentResult'

const name = 'CURIOUS JEAGER'
const pageTitle = 'SHOPPING'


function ShoppingResult() {
  return (
    <>
     <Head>
            <title>SHOPPING</title>
            <link rel="icon" href="/LOGO.ico" />
            <meta name="title" property="og:title" content="next/index" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="shopping" key="ogdes" />
            <meta name="image" property="og:image" content="/images/LOGO.png" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/shop/items" key="ogurl" />
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
   
    

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <ShowPaymentResult />
    </div>
  </div>
</section>
    
    
</>
    
  )
}

  export default ShoppingResult