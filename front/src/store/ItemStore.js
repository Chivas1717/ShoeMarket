import {makeAutoObservable} from "mobx";

export default class ItemStore {
  constructor() {
    this._brands = [{name: 'Nike'}, {name: 'Adidas'}, {name: 'Puma'}, {name: 'Vans'}]
    this._items = [{count: 5, rows: [{id: 1, name: 'Yeezy boost', price: 15000, rating: 1, brandId: 2}]}]
    this._selectedBrand = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 5
    makeAutoObservable(this)
  }
  setBrands(brands) {
    this._brands = brands
  }
  setItems(items) {
    this._items = items
  }
  setSelectedBrand(brand) {
    this.setPage(1)
    this._selectedBrand = brand
  }
  setPage(page) {
    this._page = page
  }
  setTotalCount(count) {
    this._totalCount = count
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
  get page() {
    return this._page
  }
  get limit() {
    return this._limit
  }
}