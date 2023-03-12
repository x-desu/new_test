import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import Loader from '../components/Loader'
import FormField from '../components/FormField'

import { getRandomPrompt } from '../utils'



const CreatePost = () => {

  const navigate = useNavigate()

  const [form , setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })

  const [generatingImg, setgeneratingImg] = useState(false)
  const [loading, setloading] = useState(false)

  const handleSubmit = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }
  const handleChange = () => {}

  const handleSurpriseMe = () => {
     const randomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: randomPrompt})
    console.log('hello')
  }
  
  const generateImage = () => {}

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold 
        text-[#222328] text-[32px]' >Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]' >
          Create imagnative images through DALL-E-AI.
        </p>
      </div>

      <form className='mt-16 max-x-3l' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
        <FormField 
          labelName='Your Name'
          type='text'
          name = 'name'
          placeholder='teddy beddy'
          value={form.name}
          handleChange={handleChange}
        />
        <FormField 
          labelName='Prompt'
          type='text'
          name = 'prompt'
          placeholder='teddy bears shopping for groceries in Japan, ukiyo-e'
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />

        <div className='relative bg-gray-50 border
        border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 w-64 p-3
        h-64 flex justify-center items-center'>
           {form.photo ?(
            <img 
            src={form.photo}
            alt={form.prompt}
            className="2-full h-full object-contain"
            />
           ):(
            <img 
            src={preview}
            alt={form.prompt}
            className="w-9/12 h-9/12 object-contain opacity-40"
            />
           )}

           {generatingImg && (
            <div className='absolute inset-0 z-0 flex 
            justify-center items-center bg-[rgba(0,0,0,0.5)]
            rounded-lg'>
              <Loader />
            </div>
           )}
        </div>

        </div>

        <div className='flex gap-5 mt-5'>
          <button type='button' className='bg-green-700 text-white
          text-sm text-center font-medium w-full sm:w-auto py-2.5 
          px-5 rounded-md hover:bg-[#3a3dc8] active:scale-105 
          transition duration-150 ease-in-out'
          onClick={generateImage}>
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='mt-10'>
          <p className='text-[#666e75] text-[#666e75] text-[14px] mt-2'>
            Create and Share the AI Generated Images .
            </p>
            <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium
            rounded-md text-sm w-full sm:w-auto px-5 py-2.5
            text-center'
            >
              {loading ? 'Sharing...': 'Share with the community'}
            </button>
        </div>
      </form>
      
    </section>
  )
}

export default CreatePost
