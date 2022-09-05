import React, { Fragment, useState } from "react";
import { s } from "./style";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../hooks/useRedux";

interface Props {
  onClickCategory: (value: string) => void;
}

const SearchDropdown = (props: Props) => {
  const { onClickCategory } = props;
  const [categorySelected, setCategorySelected] = useState<string>("");
  const categories: string[] = useAppSelector(
    (state) => state.movie.categories
  );

  const RenderOptions = () => {
    if (!categories) return null;

    return categories.map((category) => (
      <MenuItem key={category} value={category}>
        {category}
      </MenuItem>
    ));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCategorySelected(event.target.value as string);
    onClickCategory(event.target.value as string);
  };

  return (
    <Fragment>
      <s.Text>Catégory sélectionnée:</s.Text>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categorySelected}
            onChange={handleChange}
          >
            <MenuItem value={""}>{"Sélectionner une catégorie"}</MenuItem>
            {RenderOptions()}
          </Select>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default SearchDropdown;
