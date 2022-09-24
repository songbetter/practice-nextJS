import Link from 'next/link'

export default function EventsPage() {
  return (
    <div>
      <ul>
        {EVENT_LIST.map((event) => (
          <>
            <li key={event.id}>
              <Link href={`/events/${event.id}`}>{event.title}</Link>
            </li>
            <li key={event.id}>
              <Link href={`/events/2022/05`}>{event.title}</Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}

const EVENT_LIST = [
  {
    id: 0,
    title: '봄',
  },
  {
    id: 1,
    title: '여름',
  },
  {
    id: 2,
    title: '가을',
  },
  {
    id: 3,
    title: '겨울',
  },
]
