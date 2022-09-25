import { useRef } from 'react'
import Button from '../ui/button'

export default function EventSearch({ onSearch }) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  function onSubmit(event) {
    event.preventDefault()

    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    onSearch(selectedYear, selectedMonth)
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <Button>검색</Button>
    </form>
  )
}
