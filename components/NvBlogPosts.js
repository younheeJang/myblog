import React from 'react'
import {connect} from 'react-redux'
import {startTimer} from '../actions/dateClockAction'
import Image from 'next/image'
import Link from 'next/link'
import useSWR, { mutate } from 'swr'
import { useRouter } from "next/router";

const URL = "/api/posts";

export default function NvBlogPosts(){
    const router = useRouter(); 
    const fetcher = (...args) => fetch(...args).then(res => res.json()) 
    const { 
        query: { searchingWord }, 
    } = router; 
    const { data, mutate} = useSWR( 
        searchingWord ? `${URL}/${searchingWord}` : null, fetcher, { refreshInterval: 0, revalidateOnFocus: false, revalidateOnReconnect: false, } );

    let posts = null
    let textInput = React.createRef();
    //const fetcher = (...args) => fetch(...args).then(res => res.json()) 
    //const { data: posts, error } = useSWR('/api/posts/123', fetcher)
   
    function fetchPostsData() {
        const searchingWord = textInput.current.value;
        console.log(searchingWord)
        console.log(`${URL}/${searchingWord}`)
        fetch(`${URL}/${searchingWord}`)
     posts = mutate(`${URL}/${searchingWord}`, false)
        console.log(posts)
        
        //const fetcher = (...args) => fetch(...args).then(res => res.json()) 
        //const { data: posts, error } = useSWR('/api/posts/123', fetcher)
        //await setPostsData(returnNvPostsData);
        //articleMutate({ ...posts, body: editTextArea.value }, true);
    }
       
    if(!posts){
    return (
        <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
        <div className="relative overflow-hidden text-gray-600 max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-2xl mb-5">
            <input ref={textInput} type="search" name="search" placeholder="no data" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4" onClick={fetchPostsData}>
                <Image width={15} height={15} src="/images/search-interface-symbol.png" className="h-4 w-4 fill-curren"></Image>
            </button>
        </div>
        </div>
    ) 
    } 
    
    if(posts){
    return (
        <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
        <div className="relative overflow-hidden text-gray-600 max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-2xl mb-5">
        
            <input ref={textInput} type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4" onClick={fetchPostsData}>
                <Image width={15} height={15} src="/images/search-interface-symbol.png" className="h-4 w-4 fill-curren"></Image>
            </button>
        
        </div>
    
      {posts && posts.map(({ link, title, postdate, bloggername, description }) => (
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
    )
  }
}

