import {$authHost, $host} from "./index";

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('api/brand', brand)
  return data
}

export const fetchBrands = async () => {
  const {data} = await $host.get('api/brand', )
  return data
}

export const createDevice = async (device) => {
  const {data} = await $authHost.post('api/device', device)
  return data
}

export const fetchItems = async (brandId) => {
  const {data} = await $host.get('api/item', {params: {
    brandId,
  }})
  return data
}

export const fetchOneItem = async (id) => {
  const {data} = await $host.get('api/item/' + id)
  return data
}