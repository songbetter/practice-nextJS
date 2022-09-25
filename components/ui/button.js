import Link from 'next/link'

export default function Button({ link, onClick, children }) {
  if (link) {
    return (
      <Link href={link}>
        {/* css 적용을 위한 앵커태그 사용 */}
        <a className>{children}</a>
      </Link>
    )
  }
  return <button onClick={onClick}>{children}</button>
}
