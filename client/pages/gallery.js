import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import woodSign from '../styles/woodSign.png'
import 'animate.css';
import Link from 'next/link';


export default function Gallery() {
  return (

    <div className='bg-woodBox bg-center bg-cover h-screen '>

<div className='w-1/2 flex mx-auto text-2xl bg-slate-600/50 p-5 text-white justify-between'>
      <Link href='/'>Home</Link>
      <Link href='/gallery'>Gallery</Link>
      <Link href='/contact'>Contact Me</Link>
    </div>


    <div className='flex h-screen'>
    <div className='flex flex-col mx-auto my-auto font-bold text-white  animate__animated animate__slow animate__backInLeft bg-slate-900/50 w-1/2 p-5 rounded-xl lg:text-4xl'>
      <h1 className='mx-auto'>Gallery</h1>
    </div>
    </div>
   
      </div>


)
}
