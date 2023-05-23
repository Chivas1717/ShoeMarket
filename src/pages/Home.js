import Brands from "../components/Brands";
import Sort from "../components/Sort";
import TopRatedItem from "../components/TopRatedItem/TopRatedItem";
import ItemBlock from "../components/ItemBlock/ItemBlock";
import AboutUs from "../components/AboutUs";
import ItemList from "../components/ItemList";
import Search from "../components/Search/Search";
import {useContext, useEffect} from "react";
import {fetchBrands, fetchItems} from "../http/itemApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const Home = observer(({aboutRef}) => {
  const {item} = useContext(Context)

  useEffect(() => {
    fetchBrands().then(data => item.setBrands(data))
    fetchItems(null).then(data => {
      // console.log(data)
      item.setItems(data)
      item.setTotalCount(data.length)
      item.setTopRatedItem(data[1])
    })
  }, [])

  useEffect(() => {
    fetchItems(item.selectedBrand.id).then(data => {
      console.log('fetching')
      item.setItems(data)
      item.setTotalCount(data.length)
    })
  }, [item.selectedBrand])

  return (
    <>
      <div className='container--main'>
        <div className='mobile--search'><Search/></div>
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
})

export default Home