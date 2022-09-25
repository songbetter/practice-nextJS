import { useEffect, useState } from 'react'

export default function UserPetPage(props) {
  // 사전 렌더링 후 기본값으로 설정한다.
  const [pet, setPet] = useState(props.pet)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://practice-next-js-3bb89-default-rtdb.firebaseio.com/order.json',
    )
      .then((response) => {
        response.json().then((data) => {
          setPet(data)
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>age: {pet.option.age}</p>
      <p>breed: {pet.option.breed}</p>
      <p>gender: {pet.option.gender}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://practice-next-js-3bb89-default-rtdb.firebaseio.com/order.json',
  )
  const data = await response.json()

  return {
    props: {
      pet: data,
    },
    revalidate: 10,
  }
}
