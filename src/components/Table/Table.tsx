import { useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IUser } from "../../store/github";
import { UserAvatar } from "../common/Avatar/Avatar";

interface Column {
  id: "name" | "avatar_url" | "public_repos";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "avatar_url", label: "Avatar", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "public_repos",
    label: "Repositories",
    minWidth: 170,
    align: "right",
  },
];

interface ITableProps {
  children?: ReactNode;
  rows: Array<IUser>;
}



export const UsersTable: FC<ITableProps> = ({ children, rows }) => {
   const navigate = useNavigate();

   const handleClickByUser = (row: IUser) => navigate(`/user/${row.id}`);
  
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                {children}
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Search a user by name
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: IUser) => {
              return (
                <TableRow
                 hover role="checkbox" 
                 tabIndex={-1} 
                 key={row.id}
                 onClick={() => handleClickByUser(row)}
                >                
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'avatar_url' ? <UserAvatar image={row.avatar_url}/> : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
