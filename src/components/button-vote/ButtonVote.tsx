import React from "react";
import { Thumb } from "../../assets/icons";
import { colors } from "../../styles/colors";
import { Vote } from "../../utils/enums";
import { s } from "./style";

interface Props {
  direction: Vote;
  color?: string;
  size?: number;
  value: number;
  onClick: () => void;
}

const ButtonVote = (props: Props) => {
  const { color = colors.grey, size = 40, value, onClick, direction } = props;

  return (
    <s.ButtonVote onClick={onClick}>
      <s.Icon direction={direction}>
        <Thumb size={size} color={color} />
      </s.Icon>
      <s.Text color={color}>{value}</s.Text>
    </s.ButtonVote>
  );
};

export default ButtonVote;
