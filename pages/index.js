import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sociopad</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        <Sidebar />
      </main>
    </div>
  )
}
