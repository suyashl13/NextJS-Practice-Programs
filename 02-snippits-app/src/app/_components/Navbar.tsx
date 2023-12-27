import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex bg-purple-500 justify-around py-4'>
        <Link className='font-semibold text-slate-100 antialiased tracking-wide text-lg' href='/'>Snippets App - NextJS Course</Link>
        <ul className='flex space-x-4'>
            <li>
                <Link href='/snippets/new' className='font-bold text-purple-200 antialiased'>Create Snippet</Link>
            </li>
            <li><Link href='/snippets' className='font-bold text-purple-200 antialiased'>See Snippets</Link></li>
        </ul>
    </nav>
  )
}
