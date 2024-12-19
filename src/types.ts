export interface Product {
  id: number
  images: string[]
  title: string
  category: string
  rating: number
  price: number
}

export interface ProductServiceResponse {
  data: {
    products: Product[] // Array di prodotti dentro la proprietà "product"
  }
}
