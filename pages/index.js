import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import RightSidebar from '../components/RightSidebar'
import Sidebar from '../components/Sidebar'

export default function Home({session}) {
  if (!session) return <Login />

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
        <Feed />
        <RightSidebar />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}