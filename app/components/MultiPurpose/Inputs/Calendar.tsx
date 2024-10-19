'use client'
import React from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

type CalendarProps = {
  value: Range
  disabledDates?: Date[]
  onChange: (value: RangeKeyDict) => void
}

export const Calendar: React.FC<CalendarProps> = ({
  disabledDates,
  onChange,
  value,
}) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  )
}
