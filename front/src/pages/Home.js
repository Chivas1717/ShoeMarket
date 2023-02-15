import Brands from "../components/Brands";
import Sort from "../components/Sort";
import TopRatedItem from "../components/TopRatedItem/TopRatedItem";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className='container--main'>
        <div className='content'>
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
      <div className='content__footer'><Footer/></div>
    </>
  )
}

export default Home