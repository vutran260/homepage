import { useState } from 'react'
import Iframe from 'react-iframe'
import contactApi from '../../apis/contact.api'
import ArrowIcon from '../../components/Icon/ArrowIcon'
import MapIcon from '../../components/Icon/MapIcon'
import InputContact from '../../components/InputContact'
import LogoFixed from '../../components/LogoFixed'
import Vector6 from '../../assets/images/Vector6.png'
import Frame29 from '../../assets/images/Frame29.png'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './styles.scss'

const ArrowLeft = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.09176 9.55246C2.09195 9.55227 2.09211 9.55205 2.09233 9.55186L5.39594 6.26419C5.64343 6.01789 6.04374 6.01881 6.29009 6.26634C6.53641 6.51383 6.53546 6.91413 6.28797 7.16046L4.06993 9.36775H17.4596C17.8087 9.36775 18.0918 9.65081 18.0918 10C18.0918 10.3492 17.8087 10.6322 17.4596 10.6322H4.06996L6.28794 12.8395C6.53543 13.0859 6.53638 13.4862 6.29006 13.7337C6.0437 13.9812 5.64337 13.9821 5.39591 13.7358L2.0923 10.4481C2.09211 10.4479 2.09195 10.4477 2.09173 10.4475C1.84411 10.2004 1.8449 9.79878 2.09176 9.55246Z'
      fill='white'
    />
  </svg>
)

export default function Contact() {
  const [input, setInput] = useState({
    company_name: '',
    name: '',
    mail: '',
    phone: '',
    description: ''
  })
  const [errors, setErrors] = useState({})
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })

    console.log('value is:', input)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const errors = {}
    // validate company_name
    if (!input.company_name) {
      errors.company_name = '会社名を入力してください。'
    }
    // validate name
    if (!input.name) {
      errors.name = 'ご担当者名を入力してください。'
    }
    // validate email
    if (!input.mail) {
      errors.mail = 'メールアドレスを入力してください。'
    } else if (!/\S+@\S+\.\S+/.test(input.mail)) {
      errors.mail = 'メールアドレスの形式が正しくありません。'
    }
    // validate phone
    if (!input.phone) {
      errors.phone = '電話番号を入力してください。'
    } else if (!/^[0-9]{10,11}$/.test(input.phone)) {
      errors.phone = '電話番号の形式が正しくありません。'
    }
    // validate description
    if (!input.description) {
      errors.description = 'お問い合わせ内容を入力してください。'
    }

    // update errors state
    setErrors(errors)

    // submit form if no errors
    if (Object.keys(errors).length === 0) {
      // handle form submission
      const res = await contactApi.createContact(input)
      console.log(res.status)
      if (res.status === 200) {
        toast.success('Send Contact Successful')
      } else {
        toast.success('Has a error creating contact')
      }
    }
  }
  console.log(Vector6)
  const mainBackgroundClasses = `bg-mainBackground min-h-screen bg-contain bg-top bg-no-repeat`
  return (
    <div className={mainBackgroundClasses} style={{ backgroundSize: '800px', backgroundImage: `url(${Vector6})` }}>
      <LogoFixed fixed={true} />
      <div className='mx-auto flex max-w-[1600px]'>
        <div className='relative w-[110px] border-r-2 border-[#0B0A0A] max-[768px]:hidden' style={{ height: '50vh' }}>
          <Link to='/' className='absolute left-[43%] top-[50%] text-white'>
            <p className='vertical-text font-extrabold'>HOME</p>
            <ArrowLeft />
          </Link>
        </div>
        <div className='w-full py-[110px] pr-36 pl-8 max-md:p-0 max-md:pt-[85px] max-md:pb-6'>
          <div className='text-center text-white max-md:ml-4 max-md:text-left'>お気軽にお問い合わせください</div>
          <h3 className='mb-10 mt-3 text-center text-5xl text-white max-md:ml-4 max-md:text-left'>Contact Us</h3>
          <div className='mt-5 flex flex-wrap'>
            <div className='w-1/3 max-md:px-4 max-[768px]:w-full'>
              <h3 className='text-xl font-extrabold text-[#36AAFA]'>LET'S START A PROJECT</h3>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Address</h4>
              <p className='mt-1 text-sm text-white opacity-60'>
                〒163-0532 <br /> 東京都新宿区西新宿１丁目２６ <br /> −２ 新宿野村ビル 32階
              </p>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Tel</h4>
              <p className='mt-1 text-sm text-white opacity-60'>03-5322-2953</p>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Email</h4>
              <p className='mt-1 text-sm text-white opacity-60'>info@cet-app.com</p>
            </div>
            <div className='relative flex h-[450px] w-2/3 flex-col items-center justify-center max-md:mt-6 max-[768px]:w-full'>
              <Iframe
                url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.349832750534!2d139.69317175089557!3d35.69300793683605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5c3b6022d%3A0x2d4d3dd5a50a5b2e!2z44CSMTYzLTA1MzIg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yR5LiB55uu77yS77yW4oiS77ySIOaWsOWuv-mHjuadkeODk-ODqyAzMumajg!5e0!3m2!1svi!2s!4v1661930477323!5m2!1svi!2s'
                width='640px'
                height='320px'
                id=''
                className='h-full w-full'
                display='block'
                position='relative'
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                <MapIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-24 flex flex-wrap pr-36 pb-[100px] max-md:mt-6 max-md:px-4 max-md:pb-5 max-[768px]:flex-col-reverse'>
        <div className='w-1/3 max-md:ml-[-11%] max-[768px]:w-full'>
          <img src={Frame29} className='w-full' alt='' />
        </div>
        <div className='w-2/3 pl-[85px] max-md:pl-0 max-[768px]:w-full'>
          <h3 className='mb-8 text-xl font-extrabold text-[#36AAFA]'>CONTACT FORM</h3>
          <div className='grid grid-cols-2 gap-8 text-white max-md:grid-cols-1'>
            <InputContact
              handleChange={handleChange}
              label='会社名'
              placeholder='輸入'
              id='company_name'
              error={errors.company_name}
            />
            <InputContact
              handleChange={handleChange}
              label='ご担当者名'
              placeholder='輸入'
              id='name'
              error={errors.name}
            />
            <InputContact
              type='email'
              handleChange={handleChange}
              label='メールアドレス'
              placeholder='輸入'
              id='mail'
              error={errors.mail}
            />
            <InputContact
              handleChange={handleChange}
              label='電話番号'
              placeholder='輸入'
              id='phone'
              error={errors.phone}
            />
            <InputContact
              handleChange={handleChange}
              label='お問い合わせ内容'
              placeholder='輸入'
              id='description'
              error={errors.description}
            />
          </div>
          <button
            onClick={handleSubmit}
            className='gap mx-auto mt-8 flex items-center justify-center gap-1 rounded-[100px] border-r border-none bg-[#36AAFA] px-6 py-3 text-base text-white max-md:mb-7 max-md:w-full'
          >
            送信
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
