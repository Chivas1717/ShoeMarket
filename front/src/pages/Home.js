import Brands from "../components/Brands";
import Sort from "../components/Sort";

const Home = () => {
  return (
    <div className='container--main'>
      <div className='content__top'>
        <Brands />
        <Sort/>
      </div>
    </div>
  )
}

export default Home