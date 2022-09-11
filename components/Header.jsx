import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-[#F8F9FA] w-full'>
      <nav className='flex justify-between mx-auto max-w-6xl'>
       
        <div className='space-x-10'>
          <Link href='/'>Logo</Link>
          <Link href='/'>Recent Articles</Link>
          <Link href='/about'>About</Link>
        </div>
  
        <div>
          <button>Log in</button>
        </div>
  
      </nav>
    </div>
  )
}

export default Header