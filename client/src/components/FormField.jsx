import React from 'react'
import { CreatePost } from '../pages'

const FormField = ({labelName, type, name, placeholder,
   value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
        <div className='flex items-center gap-2 mb-2'>
          <label 
            className='font-medium text-gray-900 text-sm block' 
            htmlFor={name}>
            {labelName}
          </label>
          {isSurpriseMe && (
            <button type='button'
            onClick={handleSurpriseMe}
            
            className='bg-[#ECECF1] text-xs font-semibold py-1 px-2
            rounded-[5px] text-black hover: bg-blue'>
              Surprise Me
            </button>
          )}
        </div>
        <input type={type}
              name={name}
              placeholder={placeholder}
              id={name}
              value={value}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
              outline-none block w-full p-3"
              />
    </div>
  )
}

export default FormField
