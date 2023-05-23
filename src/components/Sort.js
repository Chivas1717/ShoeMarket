import {useContext, useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Sort = observer(() => {
  const {item} = useContext(Context)
  const sortRef = useRef(null)
  const [sortOpen, setSortOpen] = useState(false);

  const sortTypes = ['алфавітом', 'ціною', 'популярністю']

  const onClickSortActivated = (type) => {
    setSortOpen(!sortOpen);
    item.setSortType(type)
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {

      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">

        <b>Сортувати за:</b>
        <span onClick={() => setSortOpen(!sortOpen)}>{item.sortType}</span>
      </div>
      {sortOpen && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((type, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onClickSortActivated(type)}
                  className={item.sortType === type ? 'active' : ''}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  )
})

export default Sort