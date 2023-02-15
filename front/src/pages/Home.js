import Brands from "../components/Brands";
import Sort from "../components/Sort";
import TopRatedItem from "../components/TopRatedItem/TopRatedItem";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import Footer from "../components/Footer/Footer";


const Home = ({aboutRef}) => {

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
      <div ref={aboutRef} className='content__about'>
        <h1>Про нас</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ipsum suspendisse ultrices gravida dictum. Turpis egestas integer eget aliquet nibh praesent. Tellus integer feugiat scelerisque varius. Varius duis at consectetur lorem donec massa. Tellus orci ac auctor augue mauris augue. Potenti nullam ac tortor vitae purus faucibus ornare. Lectus quam id leo in vitae. Scelerisque felis imperdiet proin fermentum leo vel orci.
        </div>
      </div>
      <div className='content__footer'><Footer/></div>
    </>
  )
}

export default Home