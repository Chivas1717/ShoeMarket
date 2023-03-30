import Brands from "../components/Brands";
import Sort from "../components/Sort";
import TopRatedItem from "../components/TopRatedItem/TopRatedItem";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import AboutUs from "../components/AboutUs";
import ItemList from "../components/ItemList";


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
        <ItemList />
      </div>
      <AboutUs aboutRef={aboutRef}/>
    </>
  )
}

export default Home