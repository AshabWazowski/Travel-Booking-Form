import React,{ useState, useEffect} from "react";
import SharedTable from "./index";
import { SharedBox, SharedPaper, SharedTypo } from "../../Assets/SharedAssets";
import axios from 'axios';

const Table = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);

  const API_KEY = process.env.REACT_APP_BASEURL;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  

  useEffect(() => {
    getColumnData();
    getRowData();
  }, []);


  const getColumnData = async () => {
    try {
      const res = await axios.get(`${API_KEY}/tableData/column`);
      setColumnData(res.data);
    } catch (error) {
      console.log("Ashab Error is: ", error.message);
    }
  };

  const getRowData = async () =>{
    try {
        const res = await axios.get(`${API_KEY}/tableData/row`);
        setRowData(res.data);
      } catch (error) {
        console.log("Ashab Error is: ", error.message);
      }
  }


  return (
    <SharedBox>
      {rowData.length !== 0 ? (
        <SharedPaper elevation={3} width='100%' overflow='hidden'>
          <SharedTable
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowData={rowData}
            columnData={columnData}
          />
        </SharedPaper>
      ) : (
        <SharedPaper
          elevation={3}
          width='100%'
          height='60vh'
          overflow='hidden'
        >
          <SharedBox width="100%" height="100%">
            <SharedBox border="1px dashed black" padding='6%'>
              <SharedTypo variant="body2" color="rgb(113, 111, 111)">
                Click "New Booking+" button to add a new request
              </SharedTypo>
            </SharedBox>
          </SharedBox>
        </SharedPaper>
      )}
    </SharedBox>
  );
};

export default Table;
