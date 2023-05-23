import React, {useContext} from 'react';
import ItemBlock from "./ItemBlock/ItemBlock";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import EmptyBlock from "./EmptyBlock/EmptyBlock";

const ItemList = observer((props) => {
  const {item} = useContext(Context)
  console.log(item.items[0])

  return <div className='content__items'>
    {
      item.items ?
      item.items.map((el) => (
        <ItemBlock item={el} key={el.id}/>
      )) : <EmptyBlock />
    }
  </div>
});

export default ItemList;