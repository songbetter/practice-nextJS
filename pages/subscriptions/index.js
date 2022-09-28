import { Fragment } from 'react'
import { buildEmailPath, extractEmail } from '../api/email/index'
import Button from '../../components/ui/button'

export default function Subscriptions({ emailList }) {
  function showDetailHandler(id) {
    fetch(`/api/email/${id}`, {
      headers: {
        // json 데이터를 전달한다는 점을 명확히 하기
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json().then((data) => console.log(data)))
  }
  return (
    <ul>
      {emailList.map((item) => (
        <Fragment key={item.id}>
          <li>{item.email}</li>
          <Button onClick={() => showDetailHandler(item.id)}>
            Show Detail
          </Button>
        </Fragment>
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
