import React from 'react';
import styled from 'styled-components';
import ContentArticles from '../components/ContentArticles';

import Header from '../components/Header';
import { theme } from '../styles/global';

const Container = styled.body`
  background-color: ${theme.colors.backgroundPrimary};
`

const Home = () => {
  return (
    <Container> 
      <Header />

      <ContentArticles />
    </Container>
  )
}

export default Home;