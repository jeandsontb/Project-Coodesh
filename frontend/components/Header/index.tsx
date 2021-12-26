import React from 'react';
import { IconFire } from '../Icons';

import S from './styles';

export default () => {
  return (
    <S.BoxContainer>
      <S.BoxHeader>
        <S.BoxLogoHeader> 
          <IconFire />
        </S.BoxLogoHeader>
          
        <S.TextHeader>Products Quality</S.TextHeader>          
        
      </S.BoxHeader>
    </S.BoxContainer>
  );
}