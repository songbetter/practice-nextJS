import { buildEmailPath, extractEmail } from '../api/email'

export default function Subscriptions({ emailList }) {
  return (
    <ul>
      {emailList.map((item) => (
        <li key={item.id}>{item.email}</li>
      ))}
    </ul>
  )
}

/*
- 서버사이드 렌더링을 위한 getStaticProps, getServerSideProps에 자체 API 사용시 fetch 사용 X
- 어차피 같은 서버를 사용하기 때문에 별도의 요청 없이 경로에 접근해서 데이터를 가져올 수 있다.
*/

export async function getStaticProps() {
  const filePath = buildEmailPath()
  const emailList = extractEmail(filePath)

  return {
    props: { emailList },
  }
}
