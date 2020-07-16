import React from 'react'
import styled from 'styled-components'

export default function TaskListItem({ task, handleSetTimestamp }) {
  return (
    <StyledStatusSection>
      <StyledButton
        className={task.start ? 'active' : ''}
        onClick={() => {
          handleSetTimestamp('start', task.call_number)
        }}
      >
        Start
      </StyledButton>
      <StyledButton
        className={task.arrival ? 'active' : ''}
        onClick={() => handleSetTimestamp('arrival', task.call_number)}
      >
        Ankunft
      </StyledButton>
      <StyledButton
        className={task.done ? 'active' : ''}
        onClick={() => handleSetTimestamp('done', task.call_number)}
      >
        Erledigt
      </StyledButton>
      <StyledDiv>
        <div>{task.start}</div>
        <div>{task.arrival}</div>
        <div>{task.done}</div>
      </StyledDiv>
    </StyledStatusSection>
  )
}

const StyledStatusSection = styled.section`
  width: 90%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`

const StyledButton = styled.button`
  width: 33.3%;
  height: 51px;
  background: var(--primary-white);
  border: 1px solid var(--secondary-grey-dark);

  &.active {
    color: limegreen;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 51px;
  color: var(--secondary-grey-dark);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 51px;
    border: 1px solid var(--secondary-grey-dark);
  }
`
