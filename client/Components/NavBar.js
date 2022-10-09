import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function NavBar() {
    return(
        <div className='lg:w-1/2 w-screen flex mx-auto text-2xl bg-slate-600/50 p-5 text-white justify-between'>
        <Link href='/'>Home</Link>
        <Link href='/gallery'>Gallery</Link>
        <Link href='/contact'>Contact Me</Link>
      </div>
    )
}