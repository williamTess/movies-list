import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 10px auto;
`;

const PageContainer = styled.div`
  display: flex;
  margin: 10px auto;
`;

const Title = styled.h1`
  color: ${colors.blue};
`;

const TitleContainer = styled.div`
  margin: 0 auto;
`;

export const s = {
  Container,
  CardsContainer,
  FilterContainer,
  PageContainer,
  Title,
  TitleContainer,
};
