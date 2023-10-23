import React from "react";
import TablePagination from "@mui/material/TablePagination";

const Pagination = ({ dataLength }) => {
	const [page, setPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TablePagination
			component="div"
			count={Math.ceil(dataLength / rowsPerPage)} // Calculate the number of pages based on dataLength and rowsPerPage
			page={page}
			onPageChange={handleChangePage} // Corrected typo from 'onPageChange' to 'onPageChange'
			rowsPerPage={rowsPerPage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	);
};

export default Pagination;
