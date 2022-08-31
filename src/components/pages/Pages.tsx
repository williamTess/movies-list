import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  maxPage: number;
  page: number;
  onClick: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Pages = (props: Props) => {
  const { maxPage, page, onClick } = props;

  return (
    <Stack spacing={2}>
      <Pagination count={maxPage} page={page} onChange={onClick} />
    </Stack>
  );
};

export default Pages;
