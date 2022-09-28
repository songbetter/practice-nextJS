import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Button from '../components/ui/button'

/* 메인페이지 (/)
- href에는 객체를 전달할 수도 있다.
{ pathname: '/product/[id]', query: { id }}
*/
export default function HomePage() {
  const emailInputRef = useRef()
  function submitFormHandler(event) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value

    const reqBody = { email: enteredEmail }
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        // json 데이터를 전달한다는 점을 명확히 하기
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json().then((data) => alert(data.message)))
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/events">EventsPage</Link>
        </li>
        <li>
          <Link href="/products">ProductsPage</Link>
        </li>
      </ul>
      <form>
        <input type="email" placeholder="Email Address" ref={emailInputRef} />
        <Button onClick={submitFormHandler}>구독신청</Button>
      </form>
    </div>
  )
}
