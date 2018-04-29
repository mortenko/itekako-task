import styled from "styled-components";
import { StyledAvatar, StyledTextInfo } from "../SharedStyles";

export const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 200px;
  height: auto;
  background-color: antiquewhite;
  margin: 20px;
  padding: 15px;
`;

export const StyledGridView = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const StyledGridImage = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledGridAvatar = StyledAvatar.extend`
  margin-left: auto;
  margin-right: auto;
`;
export const StyledGridTextInfo = StyledTextInfo.extend`
  align-items: center;
   span {
     padding-bottom: 5px;
   }
`;
