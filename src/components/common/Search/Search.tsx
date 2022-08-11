import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../../hooks/hooks";
import { getUser } from "../../../store/github/actions";
import { useState } from "react";

export const Search = () => {

  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputValue = event.target.querySelector('input')?.value
    inputValue && dispatch(getUser(inputValue));   
    setSearchValue('') 
  }

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Github users"
        inputProps={{ "aria-label": "search github users" }}
        value={searchValue}
        onChange={handleSearch}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
