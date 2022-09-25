import { useRouter } from 'next/router'
import path from 'path'
import fs from 'fs/promises'

export default function ProductDetailPage({ product }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.id

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')

  const jsonData = await fs.readFile(filePath)
  const { products } = JSON.parse(jsonData)

  const product = products.find((product) => product.id === productId)

  if (product.length === 0) {
    return { notFound: true }
  }

  if (!product) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
  }

  return { props: { product } }
}

// 동적 페이지에서 어떤 인스턴스를 전달할 지 정보를 주는 함수
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'p1' } },
      { params: { id: 'p2' } },
      { params: { id: 'p3' } },
    ],
    fallback: false,
  }
}
