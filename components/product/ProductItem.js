import Link from 'next/link'

export default function ProductsItem({ id, title }) {
  return (
    <li>
      <Link href={`/products/${id}`}>
        <div>
          <h1>{title}</h1>
        </div>
      </Link>
    </li>
  )
}
