import {ButtonHTMLAttributes} from 'react'
import buttonGoDown from '../../assets/images/buttonGoDown.png'
import {Link} from "react-scroll";

export default function ButtonGoDown({target}) {
  const style = {
    backgroundImage: `url(${buttonGoDown})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: ' 50px',
    width: '50px'
  }
  return <Link style={style} to={target} className='cursor h-full w-full cursor-pointer block' isDynamic={true}
               spy={true} smooth={true} offset={-96} duration={500}></Link>
}
