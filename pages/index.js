import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

/* 메인페이지 (/)
- href에는 객체를 전달할 수도 있다.
{ pathname: '/product/[id]', query: { id }}
*/
export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/events">EventsPage</Link>
        </li>
      </ul>
    </div>
  )
}
