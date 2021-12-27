import React, {useState, useEffect} from 'react'
import api from '../../service/api';

import S from './styles';
import { IArticlesDTO } from '../../Dtos/ArticlesDTO';

const ContentArticles = () => {

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState<number>(1)
  const [dataArticles, setDataArticles] = useState<IArticlesDTO[]>([]);

  useEffect(() => {
    getDataArticles();
  }, []);

  const getDataArticles = async () => {
    const {data} = await api.get('/articles');

    if(data) {
      setDataArticles(data);
    }
    return;
  }

  const handleLoadPlusArticles = async (page: number) => {

    setLoading(true);
    let count = page + 1;

    const {data} = await api.get(`/articles?_page=${count}`);
    if(data) {
      setPageLoading(count);
      setLoading(false);
      setDataArticles(oldArticles => [
        ...oldArticles,
        ...data
      ]);
    }
  }


  return (
    <S.Container>
      <S.BoxContent>

      {dataArticles.length > 0 && dataArticles.map((item, index) => {

        let verifyPositionCard = false;
        if(index % 2 === 0) {
          verifyPositionCard = true;
        }

        return (
          <S.BoxCard key={item.id} verifyPosition={verifyPositionCard} >
            <S.BoxImage>
              <S.ImageCard src={item.imageUrl} />
            </S.BoxImage>
            <S.BoxDescription verifyPosition={verifyPositionCard}>
              <S.TextTitle>
                {item.title.substring(0, 70)}
                {item.title.length > 70 ? '...' : '.'}
              </S.TextTitle>
              <S.BoxDateAndButton>
                <S.TextData>{item.publishedAt} {verifyPositionCard}</S.TextData>
                <S.ButtonNewSite>
                  New Site
                </S.ButtonNewSite>
              </S.BoxDateAndButton>
              <S.TextDescription>
                {item.summary.substring(0, 180)}
                {item.summary.length > 180 ? '...' : '.'}
              </S.TextDescription>
              <S.ButtonShowPlus>
                Ver Mais
              </S.ButtonShowPlus>
            </S.BoxDescription>
          </S.BoxCard>
        )
      })}

      <S.BoxButtonLoad>
        {loading &&
          <S.IconloadArticles src='loading.gif' />
        }

        <S.ButtonPlusArticles onClick={() => handleLoadPlusArticles(pageLoading)}>
          Carregar Mais
        </S.ButtonPlusArticles>
      </S.BoxButtonLoad>     

      </S.BoxContent>
    </S.Container>
  );
}

export default ContentArticles;