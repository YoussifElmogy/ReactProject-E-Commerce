import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews}) => {
  const tempstars = Array.from({length:5},(_,index)=>{
    const number = 0.5+index;
    return(
    <span key={index}>
      {stars>=index+1?<BsStarFill></BsStarFill>:
      stars>=number?<BsStarHalf></BsStarHalf>:
      <BsStar></BsStar>}
      
    </span>
  )})
  return <Wrapper>
    <div>
      {tempstars}
    </div>
    <div>
      ({reviews} cutomer reviews)
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
