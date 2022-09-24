import { useRouter } from 'next/router'

export default function EventPage() {
  const router = useRouter()
  const [year, month] = router.query.slug

  return (
    <div>
      EventPage {year}-{month}
    </div>
  )
}
