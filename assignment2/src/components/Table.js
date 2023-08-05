import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function UserTable() {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUserData, setFilteredUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFilteredUserData(data);
      });
  }, []);

  const handleSearchChange = () => {
    if (searchQuery.trim() === "") {
      // Show all data when there is no search query
      setFilteredUserData(userData);
    } else {
      // Filter the data based on search query
      const filteredData = userData.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUserData(filteredData);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ marginTop: "20px" }}
    >
      <Grid item xs={12} md={8} sm={12} style={{ textAlign: "right" }}>
        <TextField
          label="Search Name"
          variant="outlined"
          value={searchQuery}
          size="small"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" onClick={handleSearchChange}>
          Search
        </Button>
      </Grid>
      <Grid item xs={12} md={8} sm={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">UserName</StyledTableCell>
                <StyledTableCell align="right">Email&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">
                  Website&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUserData.map((user) => (
                <StyledTableRow key={user.name}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.website}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default UserTable;
