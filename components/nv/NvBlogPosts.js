import React,{ useState } from 'react'
import Link from 'next/link'
import useSWR, { mutate } from 'swr'

const URL = "/api/posts";
let searchingWord = ''
export default function NvBlogPosts(){
 
    const [userInput, setInputValue] = useState("");
    const [posts, setPosts] = useState(null);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    async function fetchPostsData() {
        searchingWord = userInput
        let datas = await fetch(`${URL}/${encodeURIComponent(searchingWord)}`).then(res=>res.json()).then(data => data.items)
        setPosts(datas)
    }
    
    if(!posts){
    return (
        <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="max-w-2xl mx-auto flex items-stretch grid grid-cols-12 text-gray-600 bg-white rounded-xl shadow-md mb-10">
                <input value={ userInput } onChange={ handleInputChange } type="search" name="search" placeholder="Search" className="col-start-1 col-span-11 pl-5 pr-5 bg-white h-10 m-3 rounded-full text-sm focus:outline-none" />
                <img src='/images/search.png' className='self-center w-5 h-5 ' onClick={fetchPostsData} />
            </div>
        </div>
    ) 
    } 
    
    if(posts){
    return (
        <div className="overflow-y-auto min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="max-w-md md:max-w-2xl mx-auto lex items-stretch grid grid-cols-12 text-gray-600 bg-white rounded-xl shadow-md mb-10">
                <input value={ userInput } onChange={ handleInputChange } type="search" name="search" placeholder="Search" className="col-start-1 col-span-11 pl-5 pr-5 bg-white h-10 m-3 rounded-full text-sm focus:outline-none" />
                <img src='/images/search.png' className='cursor-pointer self-center w-5 h-5 ' onClick={fetchPostsData} />
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