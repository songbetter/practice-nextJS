import EventItem from './EventItem'

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  )
}
