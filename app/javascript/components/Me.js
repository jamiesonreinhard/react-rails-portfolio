import React from 'react';
import styled from 'styled-components';
import Projects from './Projects/Projects';

const Wrapper = styled.div `
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
`

const Me = () => {
  return(
    <Wrapper>
      <Projects />
    </Wrapper>
  )
}

export default Me;
