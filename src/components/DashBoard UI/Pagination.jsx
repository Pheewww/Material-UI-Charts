import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

const Pagination = ({
	count,
	page,
	rowsPerPage,
	onChangePage,
	onChangeRowsPerPage,
}) => {
	return (
		<TablePagination
			component="div"
			count={count}
			page={page}
			rowsPerPageOptions={[rowsPerPage]}
			rowsPerPage={rowsPerPage}
			onPageChange={onChangePage}
			onRowsPerPageChange={onChangeRowsPerPage}
			labelDisplayedRows={({ from }) => `${from} of ${count}`}
		/>
	);
};

export default Pagination;
