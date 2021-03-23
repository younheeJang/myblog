import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const List = ({Style_ListUl, Style_ListLi, Style_MobileListUl, Style_MobileListLi}) => {
    
    if(Style_ListUl && Style_ListLi){
        return ( <ul className={Style_ListUl}>
            <li className={Style_ListLi}>Intro</li>
            <li className={Style_ListLi}>Curi</li>
            <li className={Style_ListLi}>Ous</li>
            <li className={Style_ListLi}>Jea</li>
            <li className={Style_ListLi}>Ger</li>
            </ul>
        )
    }
    return ( <ul className={Style_MobileListUl}>
    <li className={Style_MobileListLi}>Intro</li>
    <li className={Style_MobileListLi}>Curi</li>
    <li className={Style_MobileListLi}>Ous</li>
    <li className={Style_MobileListLi}>Jea</li>
    <li className={Style_MobileListLi}>Ger</li>
    </ul>
)}


const MobileList = () => {
    const [active, setActive] = useState(false)
    return <>
        <div onClick={()=>{
            setActive(!active)
        }}>
    
        {!active && <div className='pr-5 grid place-items-end'><img src='/images/hamberger.png' className='h-5 w-5 p-auto'/></div>}
        {active && <div className='pr-5 grid place-items-end'><img src='/images/close.png' className='h-5 w-5 p-auto'/></div>}
        </div>
        {active && <List Style_MobileListUl='absolute right-0 top-20 list-none' Style_MobileListLi='cursor-pointer text-center bg-transparent mb-1 p-2  italic uppercase' />}
    </>
}

const Header = () => {
    const [isMobile, setIsMobile ] = useState('');
    useEffect(()=>{
        if(typeof window === 'undefined') setIsMobile(window.matchMedia('(max-width:768px)').matches);
        window.addEventListener('resize', ()=>{
            setIsMobile(window.matchMedia('(max-width:768px)').matches)
        })
        
    })
    return <nav className='shadow-lg bg-white sticky top-0 h-50 p-3 grid grid-cols-2 items-center'>
        <div><img src='/images/LOGO.png' className='mt-2 h-12 w-15'/></div>
        {isMobile?<MobileList />: <List Style_ListUl='flex justify-between list-none pr-10' Style_ListLi='cursor-pointer text-center italic uppercase'/>}
    </nav>
}

List.propTypes ={
    Style_MobileListUl: PropTypes.string,
    Style_MobileListLi: PropTypes.string,
    Style_ListUl: PropTypes.string,
    Style_ListLi: PropTypes.string
}
export default Header;

