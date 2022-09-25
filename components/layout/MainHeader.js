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
        </ul>
      </nav>
    </header>
  )
}
