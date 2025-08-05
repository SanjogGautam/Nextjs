import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <header className='bg-violet-500 p-4 text-white'>
        <div className="container mx-auto px-4 py-6 justify-between flex items-center">
            <h2>Logo</h2>
            <h2>gautamsanjok32@gmail.com</h2>
        </div>
      </header>
      <nav>
        <div className="p-4 bg-violet-600  ">
          <ul className='container mx-auto px-4 py-6 flex space-x-4 text-white justify-center font-semibold gap-7'>
            
            <li>  <Link href="/">Home</Link> </li>
             <li> <Link href="/about">About</Link> </li>
             <li> <Link href="/contact">Contact</Link>  </li> 
           <li> <Link href="/product">Product</Link>  </li> 
          </ul>
          </div>
      </nav>
    </>
  )
}

export default Header
