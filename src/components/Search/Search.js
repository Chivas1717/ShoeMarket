import {useRef, useState} from "react";
import styles from './Search.module.scss'
import SearchIcon from '../../assets/search-icon.svg'
import ClearSearchIcon from '../../assets/clear-search-icon.svg'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const searchRef = useRef(null)

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
  }

  const onClickClearInput = () => {
    setSearchValue('')
    searchRef.current.focus()
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={SearchIcon} alt='пошук лупа'/>
      <input
        ref={searchRef}
        className={styles.input}
        value={searchValue}
        onChange={onChangeInput}
        placeholder='пошук...'
      />
      {searchValue &&
        <img
          className={styles.clearIcon}
          onClick={onClickClearInput}
          src={ClearSearchIcon}
          alt='пошук очистити'
        />
      }
    </div>
  )
}

export default Search