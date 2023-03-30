import {makeAutoObservable} from "mobx";

export default class ItemStore {
  constructor() {
    this._brands = [{name: 'Nike'}, {name: 'Adidas'}, {name: 'Puma'}, {name: 'Vans'}, ]
    this._items = [
      {
        "id": 1,
        "name": "Jordan 360",
        "price": 11999,
        "rating": 0,
        "img": "111a62da-e1b5-495c-98b9-cc39822fc724.jpg",
        "createdAt": "2023-01-24T22:28:57.892Z",
        "updatedAt": "2023-01-24T22:28:57.892Z",
        "typeId": 1,
        "brandId": 1
      },
      {
        "id": 2,
        "name": "Airmax",
        "price": 12999,
        "rating": 0,
        "img": "20feba57-d626-447e-b66f-af3ec7164544.jpg",
        "createdAt": "2023-01-25T19:56:58.370Z",
        "updatedAt": "2023-01-25T19:56:58.370Z",
        "typeId": 3,
        "brandId": 1
      },
      {
        "id": 3,
        "name": "Vans 3000",
        "price": 29999,
        "rating": 0,
        "img": "d91b3c44-dcfa-433d-96aa-1e0689b00bb5.jpg",
        "createdAt": "2023-01-25T20:03:54.518Z",
        "updatedAt": "2023-01-25T20:03:54.518Z",
        "typeId": 2,
        "brandId": 1
      },
      {
        "id": 4,
        "name": "Vans 4000",
        "price": 21999,
        "rating": 0,
        "img": "d91b3c44-dcfa-433d-96aa-1e0689b00bb5.jpg",
        "createdAt": "2023-01-25T20:03:54.518Z",
        "updatedAt": "2023-01-25T20:03:54.518Z",
        "typeId": 2,
        "brandId": 1
      },
      {
        "id": 5,
        "name": "Vans 23000",
        "price": 22999,
        "rating": 0,
        "img": "d91b3c44-dcfa-433d-96aa-1e0689b00bb5.jpg",
        "createdAt": "2023-01-25T20:03:54.518Z",
        "updatedAt": "2023-01-25T20:03:54.518Z",
        "typeId": 2,
        "brandId": 1
      }
    ]
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