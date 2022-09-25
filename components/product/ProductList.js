import ProductsItem from './ProductItem'

export default function ProductsList({ items }) {
  return (
    <ul>
      {items.map((product) => (
        <ProductsItem key={product.id} id={product.id} title={product.title} />
      ))}
    </ul>
  )
}
