export default function UserProfileDetailPage({ userId }) {
  return <h1>{userId}</h1>
}

/*
- 서버에서만 동작하는 코드로, 사전 생성할 대상이 없어 Path 정보가 필요하지 않음
*/
export async function getServerSideProps(context) {
  const { params } = context
  const userId = params.id

  return {
    props: {
      userId,
    },
  }
}
