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
  
  const handleScroll = () => {
    const section = document.querySelector( `#${target}` );
    section?.scrollIntoView( { behavior: 'smooth' } );
  }
  return <a onClick={handleScroll} style={style} className='cursor h-full w-full cursor-pointer block'></a>
}
