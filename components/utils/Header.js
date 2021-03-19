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
         Menu
        </div>
        {active && <List Style_MobileListUl='absolute right-2 top-5 list-none' Style_MobileListLi='text-center bg-white rounded-lg mb-1 p-2' />}
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
    return <nav className='grid grid-cols-2 items-center'>
        <div>LOGO</div>
        {isMobile?<MobileList />: <List Style_ListUl='flex justify-between list-none pr-10' Style_ListLi='text-center'/>}
    </nav>
}

List.propTypes ={
    Style_MobileListUl: PropTypes.string,
    Style_MobileListLi: PropTypes.string,
    Style_ListUl: PropTypes.string,
    Style_ListLi: PropTypes.string
}
export default Header;

