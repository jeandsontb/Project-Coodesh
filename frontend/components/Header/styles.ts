import styled from "styled-components";
import { theme } from "../../styles/global";

export default {
  BoxContainer: styled.header`
    display: flex;
    flex: 1;
    height: auto;
  `,
  BoxHeader: styled.section`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding-bottom: 10px;
    margin-left: 5%;
  `,
  BoxForm: styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin: 20px 5px;
  `,
  BoxInput: styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px 5px;
    border: 1px solid ${theme.colors.colorPrimaryOpacity};
    background-color: ${theme.colors.backgroundPrimary};
    margin-right: 20px;
    border-radius: 5px;
  `,
  InputSearch: styled.input`
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.colorPrimary};
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
  `,
  BoxIconInput: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${theme.colors.colorPrimary};

    div {
      width: 20px;
      height: 20px;
      color: ${theme.colors.backgroundPrimary};
    }
  `,
  InputSelect: styled.select`
    width: 120px;
    outline: none;
    border: 1px solid ${theme.colors.colorPrimaryOpacity};
    background-color: ${theme.colors.backgroundPrimary};
    border-radius: 5px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;

    option {
      margin: 15px;
      border: 1px solid teal;
      border:1px solid #ccc;    
    }
  `,
  BoxLogoAndTitle: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  `,
  BoxLogoHeader: styled.div`
    display: flex;
    border: 1px solid ${theme.colors.colorPrimary};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    overflow: hidden;
  `,
  ImageHeader: styled.img`
    width: 60px;
    height: 60px;
  `,
  TextHeader: styled.p` 
    margin-top: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${theme.colors.colorPrimary};
    font-size: 38px;
  `,
}