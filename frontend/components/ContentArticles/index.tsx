import React from 'react'

import S from './styles';

const ContentArticles = () => {
  return (
    <S.Container>
      <S.BoxContent>
        
        <S.BoxCard>
          <S.BoxImage>
            <S.ImageCard src="https://ims.com.br/wp-content/uploads/2018/02/fotografia-espacial.jpg" />
          </S.BoxImage>
          <S.BoxDescription>
            <S.TextTitle>Teneroe of di</S.TextTitle>
            <S.BoxDateAndButton>
              <S.TextData>10/23/2022</S.TextData>
              <S.ButtonNewSite>
                New Site
              </S.ButtonNewSite>
            </S.BoxDateAndButton>
            <S.TextDescription>
              dsafkljaçsf adsçlkf jaçlskfj açslfkjasç fkjlçak jfasçldkfj çasdlkfj asdfa asd fasdfkl jasçdflkja çsldkfjaçsfd kjasçdkfjçasdkjf asdfalksj fçakf af
              asdfaksdfj klasjfdçaksdjf çaskfjaçsdklfjasçdkf jasçdkfja çsld
            </S.TextDescription>
            <S.ButtonShowPlus>
              Ver Mais
            </S.ButtonShowPlus>
          </S.BoxDescription>
        </S.BoxCard>
      </S.BoxContent>
    </S.Container>
  );
}

export default ContentArticles;