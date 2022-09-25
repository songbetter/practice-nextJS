import Link from 'next/link'
import classes from './eventItem.module.css'

export default function EventItem({ id, title, date, image }) {
  return (
    <li>
      <Link href={`/events/${id}`}>
        <div>
          <h1>{title}</h1>
          <h3>{date}</h3>
          <img src={image} alt="" />
        </div>
      </Link>
    </li>
  )
}
