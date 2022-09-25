import { useEffect, useState } from 'react'

export default function UserPetPage() {
  // 사전 렌더링을 하지 않기때문에 기본값으로 설정한 값이 소스코드에 포함된다.
  const [pet, setPet] = useState({
    name: '',
    option: { age: 0, breed: '', gender: '' },
  })
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
