import { useState } from 'react'

import { Student } from '@/mock/mock'

import StudentCard from './StudentCard'

/**
 * TODO :中間過度用,狀態應從父元件傳下來,讓StudentCard的沒有自己的狀態
 *
 */
const StudentCardWrapper = ({ score, ...rest }: Student) => {
  const [studentScore, setStudentScore] = useState(score)

  const handlePlusClick = () => {
    if (studentScore >= 10) return
    setStudentScore((prev) => prev + 1)
  }

  const handleMinusClick = () => {
    if (studentScore <= 0) return
    setStudentScore((prev) => prev - 1)
  }

  return (
    <StudentCard
      handlePlusClick={handlePlusClick}
      handleMinusClick={handleMinusClick}
      score={studentScore}
      {...rest}
    />
  )
}

export default StudentCardWrapper
