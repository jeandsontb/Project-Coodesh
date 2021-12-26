import styled from "styled-components";
import { theme } from "../../styles/global";
import { IconFire } from "../Icons";

export default {
  BoxContainer: styled.header`
    width: 100%;
    height: 90px;
  `,
  BoxHeader: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 90px;
    margin-left: 5%;
  `,
  BoxLogoHeader: styled.div`
    width: 80px;
    height: 80px;
  `,
  TextHeader: styled.p`  
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 38px;
  `,
}