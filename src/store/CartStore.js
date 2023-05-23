import {makeAutoObservable} from "mobx";
import {getTotalPrice} from "../utils/getCartPrice";

export default class CartStore {
  constructor() {
    this._cartItems = []
    this._totalCartCount = 0
    this._totalCartPrice = 0
    makeAutoObservable(this)
  }

  addItem(item) {
    console.log(
      'here'
    )
    const findItem = this._cartItems.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.count++;
    } else {
      this._cartItems.push(
        {
          ...item,
          count: 1,
        }
      )
    }
    this._totalCartCount = this._cartItems.reduce((acc, obj) => {
      return acc + obj.count;
    }, 0)
    console.log(this.totalCartCount)
    this._totalCartPrice = getTotalPrice(this._cartItems)
  }

  minusItem(item) {
    const findItem = this._cartItems.find((obj) => obj.id === item.id);
    if (findItem) {
      this._totalCartPrice -= findItem.price
      this._totalCartCount -= 1
      findItem.count--
      if (findItem.count === 0) {
        if (window.confirm('Remove this item from cart?')) {
          this._cartItems = this._cartItems.filter((obj) => obj.id !== item.id)
          console.log(this.cartItems)
        } else {
          this._totalCartPrice += findItem.price
          this._totalCartCount += 1
          findItem.count++
        }
      }
    }
  }

  removeItem(item) {
    this._cartItems = this._cartItems.filter((obj) => obj.id !== item.id)
  }

  clearCart() {
    this._cartItems = []
    this._totalCartCount = 0
    this._totalCartPrice = 0
  }

  get cartItems() {
    return this._cartItems
  }
  get totalCartCount() {
    return this._totalCartCount
  }
  get totalCartPrice() {
    return this._totalCartPrice
  }

}