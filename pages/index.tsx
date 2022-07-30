import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center gap-4'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-2xl font-semibold'>Hello World</button>
      <button className='bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded text-2xl font-semibold'>Hello World</button>
      <button className='bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-2xl font-semibold'>Hello World</button>
    </div>
  )
}
