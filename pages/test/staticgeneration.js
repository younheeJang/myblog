import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'


const name = 'CURIOUS JEAGER'
const pageTitle = 'Next.js > Static Generation + Naver > Search Api'

export async function getStaticProps() {

  const client_id = process.env.nv_client_id;
  const client_secret = process.env.nv_client_secret;

    const datas = await fetch('https://openapi.naver.com/v1/search/blog?query=next.js', {
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
      }, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
         } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   }).then((res) => { 
    return res.json()});

  const items = datas.items

  return {
    props: { items },
  }
}

export default function PageStaticGeneration({ items }) {
  return (
    <>
      <div className="bg-hero-pattern bg-cover sticky top-0">
        <div className={styles.container}>
          <Head>
            <title>NEXT/SG</title>
            <link rel="icon" href="/heart.ico" />
            <meta name="title" property="og:title" content="next/sg" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="example on test/staticgeneration" key="ogdes" />
            <meta name="image" property="og:image" content="/images/heart.webp" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/exam/staticgeneration" key="ogurl" />
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
    <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
      {items.map(({ link, title, postdate, bloggername, description }) => (
        <Link href={link} key={link} className="cursor-pointer">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title.replace(/<[^>]*>?/gm, '')}</div>
                        <a href="#" className="block mt-1 text-xs leading-tight font-medium text-black text-right p-1">Wriiten by '{bloggername}', &nbsp; &nbsp;Posted at {postdate}</a>
                        <p className="mt-2 text-gray-500">{description.replace(/<[^>]*>?/gm, '')}</p>
                    </div>
                </div>
            </div>
        </Link>
      ))}
    </div>
   </>  
  )
}
