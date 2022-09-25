import { useRouter } from 'next/router'

import { EVENT_LIST } from '.'
import EventList from '../../components/event/EventList'
import EventSearch from '../../components/event/EventSearch'

export default function EventSearchedPage() {
  const router = useRouter()
  const [year, month] = router.query.slug

  const EventFilterdItems = EVENT_LIST.filter(
    (event) =>
      event.date.split('-')[0] === year && event.date.split('-')[1] === month,
  )

  if (!year || !month) {
    return <p>Loading....</p>
  }

  if (
    isNaN(year) ||
    isNaN(month) ||
    +year < 2021 ||
    +month > 12 ||
    +month < 1
  ) {
    return <p>Invalid filter, Please adjust your values!</p>
  }

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <div>
      <h1>EventSearchedPage</h1>
      <h2>
        Event in {year}-{month}
      </h2>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={EventFilterdItems} />
      {!EventFilterdItems.length && <p>No data</p>}
    </div>
  )
}
