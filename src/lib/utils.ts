import { css } from 'styled-components'

import { Student } from '@/mock/mock'
import { faker } from '@faker-js/faker'

export const mediaQuery = (maxWidth = 768) => css`
  @media (max-width: ${maxWidth}px) {
    display: none;
  }
`

export const fakeWrapper = <T>(data: T) => {
  return {
    data,
    msg: 'ok',
    time: Date.now(),
  }
}

export function createEnumList<T extends { [key: string]: string | number }>(
  enumObj: T,
): { label: string; value: T[keyof T] }[] {
  return Object.keys(enumObj)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => ({
      label: key,
      value: enumObj[key as keyof T],
    }))
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): T {
  let timer: NodeJS.Timeout
  return ((...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }) as T
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): T {
  let lastCall = 0
  return ((...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= limit) {
      lastCall = now
      func(...args)
    }
  }) as T
}

interface GroupData {
  joinDate: string
  list: Student[]
}

export const generateGroupData = (students: Student[]): GroupData[] => {
  const guestStudents = students.filter((student) => !student.isGuest)
  const groupData: GroupData[] = []

  let startIndex = 0
  while (startIndex < guestStudents.length) {
    const groupSize = Math.min(
      Math.floor(Math.random() * 5) + 1,
      guestStudents.length - startIndex,
    )

    const list = guestStudents.slice(startIndex, startIndex + groupSize)

    const newGroup: GroupData = {
      joinDate: faker.date
        .between({
          from: '2020-01-01T00:00:00.000Z',
          to: '2030-01-01T00:00:00.000Z',
        })
        .toLocaleDateString(),
      list,
    }

    groupData.push(newGroup)
    startIndex += groupSize
  }

  return groupData
}
