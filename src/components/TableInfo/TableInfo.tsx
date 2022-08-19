import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { filtratedFieldsUser } from "../UserInfo/UserInfo";

interface IInfo {
  info: filtratedFieldsUser[];
}

export const InfoTable: FC<IInfo> = ({ info }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '70vw' }} aria-label="simple table">
        <TableBody>
          {info.map((user, idx) => {
            let key: Array<string> = Object.keys(user);
            return (
              <TableRow
                key={idx + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {key[0]}: { !user[key[0]] ? "-" : user[key[0]] }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
