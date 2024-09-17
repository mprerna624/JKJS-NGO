import React from 'react'
import Container from '../Container'
import ProgressBar from './ProgressBar'

function ProgressContainer() {
  return (
    <Container className='py-20 flex flex-wrap justify-center items-center gap-10 md:gap-20'>
      <ProgressBar progressPercentage={83} title="Hard Work" />
      <ProgressBar progressPercentage={100} title="Pure Love" />
      <ProgressBar progressPercentage={75} title="Smart Ideas" />
      <ProgressBar progressPercentage={65} title="Good Decisions" />
    </Container>
  )
}

export default ProgressContainer