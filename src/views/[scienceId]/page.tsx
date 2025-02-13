import { Fragment, useMemo, useState } from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled, { StyleSheetManager } from 'styled-components'

import { useQuery } from '@tanstack/react-query'

import Modal from '@/components/Modal'
import Popup, { DropdownItem, DropdownMenu } from '@/components/Popup'
import {
  BaseButton,
  CenterContainer,
  ScrollableContainer,
  Title,
} from '@/components/common'
import { useModal } from '@/hooks/useModal'
import { createEnumList, generateGroupData } from '@/lib/utils'
import mockAxios, { Science } from '@/mock/mock'
import NotFoundPage from '@/views/notfound'

import StudentCardWrapper from './_components/StudentCardWrapper'

const StyledTabs = styled(Tabs)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTabList = styled(TabList)`
  display: flex;
  gap: 10px;
`

const StyledTab = styled(Tab)`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  background-color: #ddd;

  &.react-tabs__tab--selected {
    background-color: #fff;
    color: ${(props) => props.theme.primary};
  }
`

const StyledTabPanel = styled(TabPanel)``

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const TitleContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 10px;
`

const TabHeader = styled.div`
  width: 85%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledScrollableContainer = styled(ScrollableContainer)`
  width: 100%;
  background: #fff;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 430px;
  overflow: auto;
`

const StudentsContainer = styled.div`
  width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`

enum SortTypeEnum {
  default = 'default',
  up = 'up',
  down = 'down',
}

const Page = () => {
  const { scienceId } = useParams()
  const navigage = useNavigate()
  const { isModalOpen, openModal, closeModal } = useModal(true)
  const {
    data = {
      id: '',
      students: [],
    },
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['vsx', scienceId],
    queryFn: async () => {
      const result = await mockAxios.get<FetchData<Science>>(
        'http://localhost:3000/vsx/' + scienceId,
      )
      return result.data.data
    },
    enabled: isModalOpen,
  })

  const [sortScrore, setSortScore] = useState<SortTypeEnum>(
    SortTypeEnum['default'],
  )

  const { total, studentsLength, studentList, groupData } = useMemo(() => {
    if (!data)
      return {
        total: 0,
        studentsLength: 0,
        studentList: [],
        groupData: [],
      }
    const total = data.students.length
    const studentsLength = data.students.filter((item) => !item.isGuest).length
    const studentList = (() => {
      if (sortScrore === 'up') {
        return [...data.students].sort((a, b) => {
          if (a.isGuest && !b.isGuest) return 1
          if (!a.isGuest && b.isGuest) return -1
          if (!a.isGuest && !b.isGuest) return a.score - b.score
          return 0
        })
      }

      if (sortScrore === 'down') {
        return [...data.students].sort((a, b) => {
          if (a.isGuest && !b.isGuest) return 1
          if (!a.isGuest && b.isGuest) return -1
          if (!a.isGuest && !b.isGuest) return b.score - a.score
          return 0
        })
      }
      return data.students
    })()
    return {
      total,
      studentsLength,
      studentList,
      groupData: generateGroupData(data.students),
    }
  }, [data?.students.length, sortScrore])

  if (isError) return <NotFoundPage />

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'gap'}>
      <CenterContainer gap="10px" width={'100%'} height={'85%'}>
        <BaseButton onClick={openModal}>open {scienceId}</BaseButton>
        <BaseButton onClick={() => navigage('/')}>Home</BaseButton>
        <BaseButton
          onClick={() => navigage(`/${parseInt(scienceId || '301') - 1}`)}
        >
          prev
        </BaseButton>

        <BaseButton
          onClick={() => navigage(`/${parseInt(scienceId || '301') + 1}`)}
        >
          next
        </BaseButton>

        <Modal
          width="clamp(300px, 40vw, 700px)"
          background="#ebebeb"
          isModalOpen={isModalOpen}
          onClose={closeModal}
          isLoading={isLoading}
        >
          <ModalContent>
            <TitleContainer>
              <Title>{scienceId} Science</Title> <IoPersonSharp />
              <span>
                {studentsLength}/{total}
              </span>
            </TitleContainer>
            <StyledTabs>
              <TabHeader>
                <StyledTabList>
                  <StyledTab>Student List</StyledTab>
                  <StyledTab>Group</StyledTab>
                </StyledTabList>
                <Popup>
                  <DropdownMenu>
                    {createEnumList(SortTypeEnum).map((item) => (
                      <Fragment key={item.value}>
                        <DropdownItem onClick={() => setSortScore(item.value)}>
                          {item.label}
                        </DropdownItem>
                      </Fragment>
                    ))}
                  </DropdownMenu>
                </Popup>
              </TabHeader>
              <StyledScrollableContainer>
                <StyledTabPanel>
                  <StudentsContainer>
                    {studentList.map((item) => {
                      return <StudentCardWrapper key={item.id} {...item} />
                    })}
                  </StudentsContainer>
                </StyledTabPanel>
                <StyledTabPanel>
                  <StudentsContainer>
                    {groupData.map((item) => {
                      return (
                        <Fragment key={item.joinDate}>
                          <div style={{ gridColumn: '1/-1' }}>
                            {item.joinDate}
                          </div>
                          {item.list.map((item) => {
                            return (
                              <StudentCardWrapper key={item.id} {...item} />
                            )
                          })}
                        </Fragment>
                      )
                    })}
                  </StudentsContainer>
                </StyledTabPanel>
              </StyledScrollableContainer>
            </StyledTabs>
          </ModalContent>
        </Modal>
      </CenterContainer>
    </StyleSheetManager>
  )
}

export default Page
