import path from 'path'
import fs from 'fs/promises'

export default function ProductDetailPage({ product }) {
  // fallback: true 처리할 경우 product가 사전 렌더링 되지 않기 때문에 undefined 처리를 해주어야 함
  if (!product) {
    return <p>...Loading</p>
  }

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

  if (!product) {
    return { notFound: true }
  }

  return { props: { product } }
}

// 동적 페이지에서 어떤 인스턴스를 전달할 지 정보를 주는 함수
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'p1' } }],
    // 일부 페이지만 사전 렌더링
    // fallback을 문자열로 처리할 경우 loading 처리를 따로 하지 않아도 됨.
    fallback: 'blocking',
  }
}
