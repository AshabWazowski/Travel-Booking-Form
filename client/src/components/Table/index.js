import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SharedTable = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  rowData, 
  columnData,
}) => {

  const navigate = useNavigate();
  
const handleNavigate = (id) =>{
  navigate(`/editBooking/${id}`)
}
 
  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columnData.map((item) => (
                <TableCell
                  key={item.id}
                  align={item.align}
                  style={{ minWidth: item.minWidth }}
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow onClick={()=>handleNavigate(row.id)} hover key={row.id}>
                    <TableCell>{row.label}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.dpt}</TableCell>
                    <TableCell>{row.return}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default SharedTable;
