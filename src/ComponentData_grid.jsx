
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';


// Remove the import statement for PropTypes since it has already been imported below
// import PropTypes from 'prop-types';

const DataGridComponent = ({ data, columns, loading }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} loading={loading} />
    </div>
  );
};

DataGridComponent.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DataGridComponent;



