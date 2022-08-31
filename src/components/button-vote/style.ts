import styled from "styled-components";
import { Vote } from "../../utils/enums";

const ButtonVote = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 10px;
  align-items: center;
`;

const Icon = styled.div<{ direction: Vote }>`
  margin: 0 auto;
  ${(props) => props.direction === Vote.DOWN && "transform: rotate(180deg);"}
`;

const Text = styled.h4<{ color: string }>`
  margin: 0;
  color: ${(props) => props.color};
`;

export const s = { ButtonVote, Icon, Text };
