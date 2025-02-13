import mockAxios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { box, find, map, maybe } from '@/lib/fp'
import { fakeWrapper } from '@/lib/utils'
import { faker } from '@faker-js/faker'

export const mock = new MockAdapter(mockAxios)

const sienceArray = Array.from({ length: 10 }, (_, i) => (i + 300).toString())

mock.onGet('http://localhost:3000/vsx').reply(() => {
  return [200, box(sienceArray).pipe(fakeWrapper).unwrap()]
})

const studentArray = sienceArray.map((id) => {
  return {
    id,
    students: Array.from({ length: 30 }, (_, i) => {
      return { id: numberToStringWithPadding(i + 1), ...getRandomGuestObject() }
    }),
  }
})

export type Science = (typeof studentArray)[0]
export type Student = Science['students'][0]

mock.onGet(/http:\/\/localhost:3000\/vsx\/\d+/).reply((config) => {
  const url = config.url
  const id = url?.slice(url.lastIndexOf('/') + 1)

  return [
    200,
    // maybe(studentArray)
    box(studentArray)
      .pipe(find((item) => item.id === id))
      .pipe(fakeWrapper)
      .unwrap(),
  ]
})

export default mockAxios

function getRandomGuestObject() {
  const isGuest = Math.random() < 0.33
  const score = !isGuest ? Math.floor(Math.random() * 11) : 0
  const name = !isGuest ? faker.person.lastName() : 'Guest'
  return { isGuest, score, name }
}
function numberToStringWithPadding(number: number): string {
  if (number >= 0 && number <= 9) {
    return '0' + number.toString()
  }
  return number.toString()
}
