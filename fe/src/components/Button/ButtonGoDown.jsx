import { useContext } from 'react'
import buttonGoDown from 'src/assets/images/buttonGoDown.png'
import { AppContext } from 'src/contexts/app.context'

export default function ButtonGoDown({ target }) {
  const style = {
    backgroundImage: `url(${buttonGoDown})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: ' 50px',
    width: '50px'
  }

  const { menuActive } = useContext(AppContext)
  const handleScroll = () => {
    const section = document.querySelector(`#${menuActive}`)
    // section?.scrollIntoView( { behavior: 'smooth' } );
    let sectionNext

    sectionNext = section.nextSibling

    if (sectionNext) {
      sectionNext.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return <a onClick={handleScroll} style={style} className='cursor block h-full w-full cursor-pointer'></a>
}
