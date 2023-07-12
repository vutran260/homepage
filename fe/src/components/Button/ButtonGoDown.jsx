import { ButtonHTMLAttributes } from 'react'
import buttonGoDown from '../../assets/images/buttonGoDown.png'


export default function ButtonGoDown() {
  const style = {
    backgroundImage: `url(${buttonGoDown})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: ' 50px',
    width: '50px'
  }
  return <button style={style} className='cursor h-full w-full cursor-pointer'></button>
}
