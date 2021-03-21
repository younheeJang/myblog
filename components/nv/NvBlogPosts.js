import React,{ useState } from 'react'
import Link from 'next/link'
import useSWR, { mutate } from 'swr'

const URL = "/api/posts";

export default function NvBlogPosts(){
 
    const [searchingWord, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }


    const fetcher = (...args) => fetch(...args).then(res => res.json()).then(data => data.items)
    const { data:posts } = useSWR(searchingWord ? `${URL}/${searchingWord}`: null, fetcher)
   
    
    
    async function fetchPostsData() {
        mutate(`${URL}/${searchingWord}`, false)  
    }
    
    if(!posts){
    return (
        <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="text-gray-600 max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-2xl mb-5">
                <input value={ searchingWord } onChange={ handleInputChange } onMouseUp={fetchPostsData} type="search" name="search" placeholder="Typing in English... !" className="bg-white h-10 px-5 m-3 pr-10 pl-10 rounded-full text-sm focus:outline-none" />
            </div>
        </div>
    ) 
    } 
    
    if(posts){
    return (
        <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="text-gray-600 max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-2xl mb-20">
                <input value={ searchingWord } onChange={ handleInputChange } onMouseUp={fetchPostsData} type="search" name="search" placeholder="Tying in English... !" className="overflow-hidden bg-white h-10 px-5 m-3 pr-10 pl-10 rounded-full text-sm focus:outline-none" />     
            </div>
        
            {posts && posts.map(({ link, title, postdate, bloggername, description }) => (
            <Link href={link} key={link} className="cursor-pointer">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl mb-5">
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