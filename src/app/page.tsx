import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <img src='/Skils.svg' className='h-[10rem] border ' />
        <p className='text-3xl font-bold mt-[1rem]'>Welcome to the Skillset HUB</p>
        <p className='text-xl font-semibold mt-[1rem] text-center'>
          Loading your dashboard...
        </p>
      </div>

    </div>
  )
}
