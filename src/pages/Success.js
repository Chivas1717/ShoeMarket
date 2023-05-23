import img from '../assets/success-img.png'
const Success = () => {
  return (
    <div className='successscreen'>
      <h2>Вітаємо з придбанням!</h2>
      <img src={img} alt='success'/>
    </div>
  )
}

export default Success