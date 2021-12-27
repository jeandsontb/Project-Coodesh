import styled from "styled-components";

import { theme } from "../../styles/global";

export default {
  Container: styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
    border-top: 2px solid ${theme.colors.colorPrimaryOpacity};
    margin-top: 40px;
  `,
  BoxContent: styled.div`
    width: 55%;
    padding: 50px 0;
  `,
  BoxCard: styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 220px;
  `,
  BoxImage: styled.div`
    width: 280px;
    height: 220px;
    overflow: hidden;
  `,
  ImageCard: styled.img`
    width: 100%;
    height: 100%;
  `,
  BoxDescription: styled.div`
    display: flex;
    position: relative;
    flex: 1;
    height: 220px;
    flex-direction: column;
    margin: 0 4%;
  `,
  TextTitle: styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    color: ${theme.colors.colorPrimary};
  `,
  BoxDateAndButton: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,
  TextData: styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
    color: ${theme.colors.colorActive};
  `,
  ButtonNewSite: styled.button`
    width: 80px;
    height: 22px;
    background-color: ${theme.colors.colorActive};
    color: ${theme.colors.backgroundPrimary};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.colorActiveOpacity};
      box-shadow: 0px 1px 2px ${theme.colors.colorPrimary};
    }
  `,
  TextDescription: styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
  `,
  ButtonShowPlus: styled.button`
    position: absolute;
    bottom: 0;
    width: 120px;
    height: 40px;
    background-color: ${theme.colors.colorPrimary};
    color: ${theme.colors.backgroundPrimary};
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      box-shadow: 0px 1px 2px ${theme.colors.colorPrimary};
    }
  `,
}