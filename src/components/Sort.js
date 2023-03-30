import {useEffect, useRef, useState} from "react";

const Sort = () => {
  const sortRef = useRef(null)
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState('алфавітом')

  const sortTypes = ['алфавітом', 'ціною', 'популярністю']

  const onClickSortActivated = (type) => {
    setSortOpen(!sortOpen);
    setSortType(type)
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
        <span onClick={() => setSortOpen(!sortOpen)}>{sortType}</span>
      </div>
      {sortOpen && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((type, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onClickSortActivated(type)}
                  className={sortType === type ? 'active' : ''}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort