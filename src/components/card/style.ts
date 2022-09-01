import styled from "styled-components";
import { colors } from "../../styles/colors";

const Card = styled.div<{ big: boolean }>`
  display: flex;
  border-radius: 5px;
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 10px;
  min-width: 375px;
  ${(props) => (props.big ? "flex: 0 0 40%;" : "flex: 0 0 20%;")};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 20px 30px;
  flex: 1;
  width: 15%;
`;

const CardImage = styled.div`
  flex: 0 0 25%;
`;

const CardRate = styled.div`
  background: linear-gradient(
    to bottom,
    ${colors.blueLight} 0%,
    ${colors.pinkLight} 100%
  );
  flex: 0 0 50px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${colors.white};
  writing-mode: vertical-lr;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardRemoveButton = styled.span<{
  big: boolean;
}>`
  margin: 2px;
  padding: 3px 6px;
  font-size: ${(props) => (props.big ? "18px" : "14px")};
  color: ${colors.red};
  border: solid ${colors.red};
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    color: ${colors.white};
    background: ${colors.red};
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  margin: 15px auto;
`;

const CategoryTile = styled.div<{
  colorIndex: number;
  big: boolean;
}>`
  margin: 2px;
  padding: 3px 6px;
  font-size: ${(props) => (props.big ? "18px" : "14px")};
  background: ${(props) =>
    props.colorIndex % 2 === 0 ? colors.pinkLight : colors.blueLight};
  border-radius: 20px;
  color: ${colors.white};
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const RemoveButtonContainer = styled.div`
  display: flex;
  margin: 15px auto;
  cursor: pointer;
`;

const Title = styled.h3<{ big: boolean }>`
  margin: 0 auto;
  color: ${colors.blue};
  font-size: ${(props) => (props.big ? "24px" : "19px")};
`;

const TitleContainer = styled.div`
  margin: 0 auto;
`;

const VoteContainer = styled.div<{ big: boolean }>`
  display: flex;
  margin: ${(props) => (props.big ? "15px auto" : "0 auto")};
`;

export const s = {
  Card,
  CardContent,
  CardRate,
  CardImage,
  CardRemoveButton,
  CategoryContainer,
  CategoryTile,
  Image,
  RemoveButtonContainer,
  Title,
  TitleContainer,
  VoteContainer,
};
