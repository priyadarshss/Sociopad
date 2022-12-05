import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { IoMdPhotos } from 'react-icons/io'
import { BsEmojiSmile } from 'react-icons/bs'
import { RiDeleteBin6Line, RiMapPin5Fill } from 'react-icons/ri'
import { FiPaperclip } from 'react-icons/Fi'
import { useRef, useState } from 'react'

const CreatePost = () => {
  const SOCIOPAD_ENDPOINT = 'http://localhost:8080/api/v1/post'
  const { data: session } = useSession()
  const inputRef = useRef(null)
  const hiddenFileInput = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        setImageToPost(e.target.result)
      }
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return
    const formData = new FormData()

    formData.append('file', imageToPost)
    console.log('imagetopost: ' + imageToPost)
    formData.append('post', inputRef.current.value)
    formData.append('name', session?.user.name)
    formData.append('email', session?.user.email)
    formData.append('profilePic', session?.user.image)

    axios
      .post(SOCIOPAD_ENDPOINT, formData, {
        headers: { Accept: 'application/json' },
      })
      .then((response) => {
        inputRef.current.value = ''
        dispatch(addPost(response.data))
        console.log(response.data)
        removeImage()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2 divide-y'>
      <div className='flex p-4 space-x-2 items-center'>
        <Image
          src={session?.user.image}
          alt='Profile pic'
          height={40}
          width={40}
          className='rounded-full cursor-pointer'
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4'
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user.name}?`}
          ></input>
          <button hidden onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImage}
          className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer justify-center'
        >
          <Image
            src={imageToPost}
            alt='Image'
            width='100'
            height='200'
            className='object-contain'
          />
          <RiDeleteBin6Line className='h-8 hover:text-red-500' />
        </div>
      )}
      <div className='flex justify-evenly py-2'>
        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md'>
          <HiOutlineVideoCamera className='text-orange-600' size={20} />
          <p className='font-semibold text-gray-600'>Live Video</p>
        </div>
        <div
          className='flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md'
          onClick={handleClick}
        >
          <IoMdPhotos className='text-orange-500' size={20} />
          <p className='font-semibold text-gray-600'>Photo/Video</p>
          <input
            ref={hiddenFileInput}
            onChange={addImageToPost}
            type='file'
            accept='image/*'
            hidden
          />
        </div>
        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md'>
          <RiMapPin5Fill className='text-orange-500' size={20} />
          <p className='font-semibold text-gray-600'>Share Live Location</p>
        </div>
        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md'>
          <FiPaperclip className='text-orange-600' size={20} />
          <p className='font-semibold text-gray-600'>Attach File</p>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
