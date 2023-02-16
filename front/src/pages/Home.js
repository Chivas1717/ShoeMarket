import Brands from "../components/Brands";
import Sort from "../components/Sort";
import TopRatedItem from "../components/TopRatedItem/TopRatedItem";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import AboutUs from "../components/AboutUs";


const Home = ({aboutRef}) => {

  return (
    <>
      <div className='container--main'>
        <div className='content__banner'>
          <TopRatedItem />
        </div>
        <div className='content__top'>
          <Brands />
          <Sort/>
        </div>
        <div className='content__items'>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
          <ItemBlock/>
        </div>
      </div>
      <AboutUs aboutRef={aboutRef}/>
    </>
  )
}

export default Home