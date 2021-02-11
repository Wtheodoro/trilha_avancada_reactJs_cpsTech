export interface ProductsType {
    products: EachProductType
}

export interface EachProductType {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}