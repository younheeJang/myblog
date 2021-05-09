import React from 'react';
import Head from 'next/head'
import Header from '../../components/game/Header';
import Box from '../../components/game/Box';

const GameCrashGoalPage:React.FC = () => {

    
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
            <meta name="url" property="og:url" content="http://localhost:3000/game/crashgoal" key="ogurl" />
             </Head>
             <Header />
             <Box />
        </>
    )
}

export default GameCrashGoalPage;