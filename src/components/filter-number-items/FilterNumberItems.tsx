import React, { Fragment, useState } from "react";
import { s } from "./style";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  onClickPage: (value: number) => void;
}

const FilterNumberItems = (props: Props) => {
  const { onClickPage } = props;
  const [itemNumber, setItemNumber] = useState<string>("4");

  const handleChange = (event: SelectChangeEvent) => {
    setItemNumber(event.target.value as string);
    onClickPage(Number(event.target.value));
  };

  return (
    <Fragment>
      <s.Text>Nombre de films par page:</s.Text>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={itemNumber}
            onChange={handleChange}
          >
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default FilterNumberItems;
