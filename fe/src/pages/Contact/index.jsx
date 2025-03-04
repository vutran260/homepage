import React, { useState } from 'react'
import { toast } from 'react-toastify'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import CloseIcon from 'src/components/Icon/CloseIcon/index.jsx'
import EnvelopeIcon from 'src/components/Icon/EnvelopeIcon/index.jsx'

export default function ContactForm() {
  const [input, setInput] = useState({
    company_name: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!input.company_name.trim()) {
      newErrors.company_name = '会社名を入力してください'
    }

    if (!input.name.trim()) {
      newErrors.name = '担当者名を入力してください'
    }

    if (!input.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください。'
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = 'メールアドレスの形式が正しくありません。'
    }

    if (!input.phone.trim()) {
      newErrors.phone = '電話番号を入力してください。'
    } else if (!/^[0-9]{10,11}$/.test(input.phone)) {
      newErrors.phone = '電話番号の形式が正しくありません。'
    }

    if (!input.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      try {
        // Replace with your actual API call
        // const response = await contactApi.createContact(input)

        toast.success('お問い合わせを送信しました')

        // Reset form
        setInput({
          company_name: '',
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } catch (error) {
        toast.error('送信中にエラーが発生しました')
      }
    }
  }

  return (
    <div className='page-detail-container bg-light-2'>
      <CloseIcon redirect={`Contact_Us`} />
      <div className='mb-10 text-center'>
        <FlexibleGradient text={'お気軽にお問い合わせください'} className='mb-5 text-3xl' />
        <p className='text-4xl text-white md:text-5xl'>お問い合わせ</p>
      </div>
      <div className='flex justify-center'>
        <div className='border-card w-[600px] rounded-2xl bg-gradient-blue-top p-4 md:p-8'>
          <EnvelopeIcon className='mb-4' />
          <h1 className='mb-4 text-3xl font-bold text-white'>お問い合わせ</h1>
          <p className='text-base text-whiteGray-500'>お問い合わせはこちらのフォームよりご連絡ください。</p>
          <p className='mb-6 text-base text-whiteGray-500'>ご質問・コメントなども、こちらよりお待ちしております。</p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <label htmlFor='company_name' className='mb-2 block text-sm font-medium text-white'>
                  会社名
                </label>
                <input
                  type='text'
                  id='company_name'
                  name='company_name'
                  value={input.company_name}
                  onChange={handleChange}
                  placeholder='会社名を入力'
                  className={`focus:ring-blue-500 border-input w-full rounded-lg bg-whiteGray-100 px-3 py-2 text-white focus:outline-none focus:ring-2 
                  ${errors.company_name ? 'border-2 border-red-500' : ''}`}
                />
                {errors.company_name && <p className='mt-1 text-xs text-red-500'>{errors.company_name}</p>}
              </div>

              <div>
                <label htmlFor='name' className='mb-2 block text-sm font-medium text-white'>
                  ご担当者名
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={input.name}
                  onChange={handleChange}
                  placeholder='担当者名を入力'
                  className={`focus:ring-blue-500 border-input w-full rounded-lg bg-whiteGray-100 px-3 py-2 text-white focus:outline-none focus:ring-2 
                  ${errors.name ? 'border-2 border-red-500' : ''}`}
                />
                {errors.name && <p className='mt-1 text-xs text-red-500'>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor='email' className='mb-2 block text-sm font-medium text-white'>
                  メールアドレス
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={input.email}
                  onChange={handleChange}
                  placeholder='メールアドレスを入力'
                  className={`focus:ring-blue-500 border-input w-full rounded-lg bg-whiteGray-100 px-3 py-2 text-white focus:outline-none focus:ring-2 
                  ${errors.email ? 'border-2 border-red-500' : ''}`}
                />
                {errors.email && <p className='mt-1 text-xs text-red-500'>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor='phone' className='mb-2 block text-sm font-medium text-white'>
                  電話番号
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={input.phone}
                  onChange={handleChange}
                  placeholder='電話番号を入力'
                  className={`focus:ring-blue-500 border-input w-full rounded-lg bg-whiteGray-100 px-3 py-2 text-white focus:outline-none focus:ring-2 
                  ${errors.phone ? 'border-2 border-red-500' : ''}`}
                />
                {errors.phone && <p className='mt-1 text-xs text-red-500'>{errors.phone}</p>}
              </div>

              <div className='md:col-span-2'>
                <label htmlFor='message' className='mb-2 block text-sm font-medium text-white'>
                  お問い合わせ内容
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={input.message}
                  onChange={handleChange}
                  placeholder='お問い合わせ内容を入力'
                  rows={4}
                  className={`focus:ring-blue-500 border-input w-full rounded-lg bg-whiteGray-100 px-3 py-2 text-white focus:outline-none focus:ring-2 
                  ${errors.message ? 'border-2 border-red-500' : ''}`}
                />
                {errors.message && <p className='mt-1 text-xs text-red-500'>{errors.message}</p>}
              </div>
            </div>

            <div className='mt-6 w-full text-center'>
              <button
                type='submit'
                className='w-full transform rounded-lg bg-blueCustom-200 py-3 px-8 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blueCustom-900'
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
