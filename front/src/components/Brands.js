import {useContext, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Brands = observer(() => {

  const {item} = useContext(Context)

  const onClickBrand = (brand) => {
    item.setSelectedBrand(brand)
  }

  return (
    <div className="brands">
      <ul>
        <li
          onClick={() => onClickBrand({})}
          className={"name" in item.selectedBrand ? '' : 'active'}>
          Всі
        </li>
        {item.brands.map((brand, idx) => (
          <li
            key={idx}
            onClick={() => onClickBrand(brand)}
            className={item.selectedBrand.name === brand.name ? 'active' : ''}>
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Brands