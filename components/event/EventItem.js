import Image from 'next/image'
import Link from 'next/link'
import classes from './eventItem.module.css'

export default function EventItem({ id, title, date, image }) {
  return (
    <li>
      <Link href={`/events/${id}`}>
        <div>
          <h1>{title}</h1>
          <h3>{date}</h3>
          {/* 
          - 화면에서 보여줄 이미지 크기를 px 단위로 정한다. (별도로 정한 css 적용 가능)
          - Lazy Loading을 지원한다. 브라우저 크기, 스크롤 위치에 대응하여 필요할 때 이미지를 불러온다.
          - 유사한 기기에서 요청이 들어올 때 캐싱된 이미지를 불러온다.
          - 이미지를 생성할 때 원본이미지보다 작은 용량, webp 형식으로 최적화 한다.
          - 이미지 다운로드 시 이미지 크기는 동일하고 적은 용량, webp 파일이 다운로드 된다.
          */}
          <Image src={image} alt="" width={400} height={400} />
        </div>
      </Link>
    </li>
  )
}
