import React, {useContext} from 'react';
import ItemBlock from "./ItemBlock/ItemBlock";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const ItemList = observer((props) => {
  const {item} = useContext(Context)

  return <div className='content__items'>
    {item.items.map((el) => (
        <ItemBlock item={el} key={el.id}/>
      )
    )}
  </div>
});

export default ItemList;