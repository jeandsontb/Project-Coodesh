import React from 'react';
import { IconSearch } from '../Icons';

import S from './styles';

const Header = () => {
  return (
    <S.BoxContainer>
      <S.BoxHeader>

        <S.BoxForm>

          <S.BoxInput>
            <S.InputSearch placeholder='Search' />
            <S.BoxIconInput>
              <div>
                <IconSearch />
              </div>
            </S.BoxIconInput>
          </S.BoxInput>

          <S.InputSelect name="selectOrder">
            <option disabled selected style={{display: 'none'}} >Sort</option>
            <option value="dec" >Mais antigas</option>
            <option value="asc" >Mais novas</option>
          </S.InputSelect>
        </S.BoxForm>
        
        <S.BoxLogoAndTitle>
          <S.BoxLogoHeader> 
            <S.ImageHeader src='/rocket.png' />
          </S.BoxLogoHeader>          
          <S.TextHeader>Space Flight News</S.TextHeader> 
        </S.BoxLogoAndTitle>
        
      </S.BoxHeader>
    </S.BoxContainer>
  );
}

export default Header;