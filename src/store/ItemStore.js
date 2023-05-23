import {makeAutoObservable} from "mobx";

export default class ItemStore {
  constructor() {
    this._brands = []
    this._items = []
    this._selectedBrand = {}
    this._totalCount = 0
    this._topRatedItem = {}
    this._sortType = 'алфавітом'
    makeAutoObservable(this)
  }

  setSortType(type) {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    this._sortType = type
    if (type === 'алфавітом') {
      this._items.sort((a,b) => a.name.localeCompare(b.name))
    } else if (type === 'ціною') {
      this._items.sort((a, b) => a.price - b.price)
    } else {
      shuffleArray(this._items)
    }
  }
  setBrands(brands) {
    this._brands = brands
  }
  setItems(items) {
    this._items = items
  }
  setSelectedBrand(brand) {
    console.log(brand)
    this._selectedBrand = brand
  }

  setTotalCount(count) {
    this._totalCount = count
  }

  setTopRatedItem(item) {
    this._topRatedItem = item
  }

  get sortType() {
    return this._sortType
  }

  get topRatedItem() {
    return this._topRatedItem
  }

  get brands() {
    return this._brands
  }
  get items() {
    return this._items
  }
  get selectedBrand() {
    return this._selectedBrand
  }
  get totalCount() {
    return this._totalCount
  }

}