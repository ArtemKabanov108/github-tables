import { FC, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../../hooks/hooks";
import { getUser } from "../../../store/github/actions";
import { searchByNameRepo } from "../../../store/github";

interface ISearchProps {
  label: string;
  userOrFork: boolean;
}

export const Search: FC<ISearchProps> = ({ label, userOrFork }) => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputValue = event.target.querySelector("input")?.value;
    inputValue && dispatch(getUser(inputValue));
    setSearchValue("");    
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (!userOrFork) {
      if(!searchValue){ 
        dispatch(searchByNameRepo(''))
      };
      dispatch(searchByNameRepo(searchValue));
    }
  }, [searchValue]);  

  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={label}
        inputProps={{ "aria-label": label }}
        value={searchValue}
        onChange={handleSearch}
      />
      {userOrFork && (
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
};
