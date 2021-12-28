import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs';

import api from '../../service/api';
import S from './styles';
import { IArticlesDTO, IContentArticlesPropsDTO } from '../../Dtos/ArticlesDTO';
import BoxSearchInformation from '../BoxSearchInformation';

const ContentArticles = ({sendSearch, sendListOrder}: IContentArticlesPropsDTO) => {

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState<number>(1)
  const [lisOrderSearch, setListOrderSearch] = useState<number>(-1);
  const [dataArticles, setDataArticles] = useState<IArticlesDTO[]>([]);
  const [buttonSearch, setButtonSearch] = useState<boolean>(true);
  const [boxInformation, setBoxInformation] = useState<boolean>(false);

  useEffect(() => {
    getDataArticles();
  }, []);

  const getDataArticles = async () => {
    const {data} = await api.get(`/articles?_page=${pageLoading}&_order=${lisOrderSearch}`);
    if(data) {
      setDataArticles(data);
    }
    return;
  }

  useEffect(() => {
    if(sendSearch.length > 2) {
      setLoading(true);
      setDataArticles([]);
      const getSearchArticles = async () => {
        const {data} = await api.get(`/articles/${sendSearch}`);
        if(data.length > 0) {
          setBoxInformation(false);
          setLoading(false);
          setDataArticles(data);
          setButtonSearch(false);
          return;
        }
        setBoxInformation(true);
        setLoading(false);
      }
      getSearchArticles();
    } else {
      setButtonSearch(true);
      getDataArticles();
      setBoxInformation(false);
    }
  }, [sendSearch]);

  useEffect(() => {
    const getOrderSelectedArticle = async () => {
      setLoading(true);
      setDataArticles([]);
      let list = 1;
      if(sendListOrder === 'asc') {
        const {data} = await api.get(`/articles?_page=${pageLoading}&_order=${list}`);
        if(data) {
          setLoading(false);
          setListOrderSearch(1)
          setDataArticles(data);
          return;
        }
      }
      const {data} = await api.get(`/articles?_page=${pageLoading}&_order=${lisOrderSearch}`);
        if(data) {
          setLoading(false);
          setListOrderSearch(1)
          setDataArticles(data);
          return;
        }
    }
    
    getOrderSelectedArticle();
  }, [sendListOrder]);

  const handleLoadPlusArticles = async (page: number) => {
    setLoading(true);
    let count = page + 1;

    const {data} = await api.get(`/articles?_page=${count}&_order=${lisOrderSearch}`);
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

      {boxInformation &&
        <BoxSearchInformation />
      }
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
                <S.TextData>{dayjs(item.publishedAt).format('DD/MM/YYYY')}</S.TextData>
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

        {buttonSearch &&
          <S.ButtonPlusArticles onClick={() => handleLoadPlusArticles(pageLoading)}>
            Carregar Mais
          </S.ButtonPlusArticles>
        }
      </S.BoxButtonLoad>     

      </S.BoxContent>
    </S.Container>
  );
}

export default ContentArticles;