export default function UserProfilePage({ username }) {
  return <h1>{username}</h1>
}

export async function getServerSideProps(context) {
  // 요청 객체와 응답 객체에 접근할 수 있다.
  const { req, res } = context

  return {
    props: {
      username: 'Tommy',
    },
  }
}
