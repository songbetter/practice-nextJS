import Link from 'next/link'
import EventList from '../../components/EventList'

export default function EventsPage() {
  return (
    <div>
      <EventList items={EVENT_LIST} />
    </div>
  )
}

const EVENT_LIST = [
  {
    id: 0,
    title: '봄',
    image: '/images/car.jpeg',
    date: '2022-03-01',
  },
  {
    id: 1,
    title: '여름',
    image: '/images/food.jpeg',
    date: '2022-06-01',
  },
  {
    id: 2,
    title: '가을',
    image: '/images/mirror.jpeg',
    date: '2022-09-01',
  },
  {
    id: 3,
    title: '겨울',
    image: '/images/car.jpeg',
    date: '2022-12-01',
  },
]
