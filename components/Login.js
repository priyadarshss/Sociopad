import Image from 'next/image'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    
    <div className="flex flex-col items-center mt-52">
      <Image
        src='https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHw%3D&w=1000&q=80'
        alt='Google-logo'
        width={200}
        height={200}
        className="rounded-t-full"
      />
      <a
        onClick={signIn}
        className="p-2 px-8 mb-40 cursor-pointer bg-orange-600 rounded-2xl text-white font-bold">
        Login
      </a>
    </div>
  )
}

export default Login