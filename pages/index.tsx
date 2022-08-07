import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-gray-200'>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  )
}

export default Home
