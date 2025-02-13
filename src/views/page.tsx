import { useNavigate } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { BaseButton } from '@/components/common'
import mockAxios from '@/mock/mock'

const Page = () => {
  const navigage = useNavigate()

  const { data = [], isLoading } = useQuery({
    queryKey: ['vsx'],
    queryFn: async () => {
      const result = await mockAxios.get<FetchData<string[]>>(
        'http://localhost:3000/vsx',
      )
      return result.data.data
    },
  })

  if (isLoading) return <>isLoading...</>

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {data.map((item) => (
          <BaseButton onClick={() => navigage(`/${item}`)} key={item}>
            {item}
          </BaseButton>
        ))}
      </div>
    </>
  )
}

export default Page
