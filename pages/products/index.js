import fs from 'fs/promises'
import Head from 'next/head'
import path from 'path'
import { Fragment } from 'react'
import ProductsList from '../../components/product/ProductList'

export default function ProductsPage({ products }) {
  return (
    <Fragment>
      {/* _app.js에서 title을 지정했더라도 페이지별로 추가할 수 있다. 가장 최신의 title 하나만 반영된다. */}
      <Head>
        <title>ProductsPage</title>
      </Head>
      <ProductsList items={products} />
    </Fragment>
  )
}

/* 
- 모든 페이지에 추가할 수 있고 내보내야 한다.
- 페이지를 사전 생성할 때 사용자를 대신하여 호출한다.
- 컴포넌트 함수를 실행하기 전에 getStaticProps를 탐색해서 호출한다.
- 페이지를 사전 렌더링 하기 전 데이터를 프리패치한다.
- 항상 프로퍼티 키가 있는 객체를 반환해야 한다.
- 서버 사이드 함수이기 떄문에 자바스크립트 파일에서 볼 수 없다.
*/
export async function getStaticProps() {
  // process.cwd() 현재 디렉토리 (= 루트)
  // 파일에 대한 절대경로 구축
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')

  // 프로미스를 반환하는 비동기 함수
  const jsonData = await fs.readFile(filePath)

  // json data를 가져와서 JavaScript 객체로 변환
  const { products } = JSON.parse(jsonData)

  if (products.length === 0) {
    return { notFound: true }
  }

  if (!products) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
  }
  return {
    props: {
      products,
    },
    // 10초 마다 재생성 (ISR)
    // revalidate: 10,
  }
}
