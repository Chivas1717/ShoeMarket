import {useState} from "react";

const Brands = () => {
  const brands = ['Всі', 'Nike', 'Adidas', 'Puma', 'Vans']
  const [selectedBrand, setSelectedBrand] = useState(0)

  const onClickBrand = (id) => {
    setSelectedBrand(id)
  }

  return (
    <div className="brands">
      <ul>
        {brands.map((brand, idx) => (
          <li
            key={idx}
            onClick={() => onClickBrand(idx)}
            className={selectedBrand === idx ? 'active' : ''}>
            {brand}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Brands