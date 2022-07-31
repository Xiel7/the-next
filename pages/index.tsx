
// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('http://localhost:8000')
//   const data  = await res.json()
//   return { props: { data } } 
// }

export default function Home({data} : any) {
  return (
    <div className='flex flex-col h-screen w-screen justify-center  gap-4'>
      <div className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-2xl font-semibold text-center'>Which pokemon is rounder</div>
      <div className='group'>
        <div className='bg-purple-500 group-hover:bg-purple-700 text-white p-8 rounded text-2xl font-semibold justify-between'>
          <div className='bg-purple-300  group-hover:bg-purple-500 p-8 rounded'>Voting screen</div>
        </div>
      </div>
    </div>
  )
}
