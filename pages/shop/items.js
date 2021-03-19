
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/layout.module.css'
import DateClock from '../../components/utils/DateClock'

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
            <meta name="image" property="og:image" content="/images/LOGO.png" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/shop/items" key="ogurl" />
        </Head>
        <header className={styles.header}>
            <DateClock />
            <Image
              priority
              src="/images/LOGO.png"
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
   
    

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block h-60 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src='/images/flower1.jpg' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BOUQUET</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">PINK</h2>
          <p className="mt-1">16,200</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block h-60 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/flower2.jpg" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BOUQUET</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">RED</h2>
          <p className="mt-1">13,400</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    
</>
    
  )
}