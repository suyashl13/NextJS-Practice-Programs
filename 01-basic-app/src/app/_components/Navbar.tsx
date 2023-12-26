import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex place-content-around bg-indigo-500 py-4'>
    <p className='text-balance font-extrabold text-slate-300 antialiased text-lg'>
        <Link href='/'>Basic Next App</Link>
    </p>
      <ul className='flex justify-center space-x-8 text-white'>
        <li>
            <Link href='/performance'>Performance</Link>
        </li>
        <li>
            <Link href='/reliability'>Reliability</Link>
        </li>
        <li>
           <Link href='/scale'>Scale</Link>
        </li>
      </ul>
    </nav>
  );
}
