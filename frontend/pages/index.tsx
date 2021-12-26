import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { theme } from '../styles/global';

const Container = styled.body`
  background-color: ${theme.colors.colorActive};
`

const Home = () => {
  return (
    <Container> 
      <Header />
    </Container>
  )
}

export default Home;