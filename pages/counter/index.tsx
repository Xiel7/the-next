import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../../components/button'

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:8000')
  const data = await res.json()
  return { props: { data } }
}

export default function Home({ data }: any) {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className='flex flex-col h-screen w-screen justify-center gap-4'>
      <div className='flex justify-center item w-full bg-blue-500 hover:bg-blue-700 p-4 rounded font-semibold'>
        <div className='h-40 w-40'><Image src='/vercel.svg' width={1} height={1} alt='BAKA' layout='responsive' /></div>
      </div>
      <div className='flex h-full w-full justify-center items-center gap-5'>
        <Button action={incrementCount}>+</Button>
        <span className='text-3xl font-semibold'>{count}</span>
        <Button action={decrementCount}>-</Button>
      </div>
    </div>
  )
}
