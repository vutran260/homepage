import btnNext from '../../assets/images/buttonGoDown.png'
export default function CustomArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundImage: `url(${btnNext})`,
        backgroundSize: 'contain',
        width: '40px',
        height: '40px',
        transform: props.transform
      }}
      onClick={onClick}
    />
  )
}
