import { FC, ReactNode } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { IRepo } from '../../store/github';

interface Column {
    id: "name" | "stargazers_count" | "forks_count";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }
  
  const columns: Column[] = [
    { id: "name", label: "Fork Name", minWidth: 100 },
    { id: "stargazers_count", label: "Stars", minWidth: 170 },
    {
      id: "forks_count",
      label: "Fork count",
      minWidth: 170,
      align: "right",
    },
  ];

interface IRepoTableProps {
    children: ReactNode;
    repos: IRepo[];
    title: string;
}

export const RepoTable: FC<IRepoTableProps> = ({children, repos, title}) => {
    
const handleRedirect = (repoUrl: string) => window.open(repoUrl, '_blank')?.focus();

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
                    {title}
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
                {repos.map((row: IRepo) => {
                  return (
                    <TableRow
                     hover role="checkbox" 
                     tabIndex={-1} 
                     key={row.id}
                    >                
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell 
                          key={column.id} 
                          align={column.align}
                          onClick={() => handleRedirect(row.html_url)}
                          >
                            {value}
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
}
