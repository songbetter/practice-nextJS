import Link from 'next/link'

export default function MainHeader() {
  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
          <li>
            <Link href="/products">All Products</Link>
          </li>
          <li>
            <Link href="/user/profile">User Profile</Link>
          </li>
          <li>
            <Link href="/user/pet">User Pet</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
