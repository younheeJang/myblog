import React from 'react';
import Head from 'next/head'
import MovieRecent5 from '../../components/movie/Recent5';
import MovieHeader from '../../components/movie/Header';

const MovieRecent5Page:React.FC = () => {

    
    return(
        <>
            <Head>
            <title>Movie Recent5</title>
            <link rel="icon" href="/LOGO.ico" />
            <meta name="title" property="og:title" content="next/index" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="movie-recent5" key="ogdes" />
            <meta name="image" property="og:image" content="/images/LOGO.png" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/movie/recent5" key="ogurl" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>
             </Head>
             <MovieHeader />
             <MovieRecent5 />
        </>
    )
}

export default MovieRecent5Page;