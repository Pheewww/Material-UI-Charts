// import { useMemo, useState } from 'react';
// import { Avatar, Box, Typography } from '@mui/material';
// import { DataGrid, gridClasses } from '@mui/x-data-grid';
// import moment from 'moment';
// import { grey } from '@mui/material/colors';

// const Users = () => {
//   const [pageSize, setPageSize] = useState(5);
//   // eslint-disable-next-line no-unused-vars
//   const [rowId, setRowId] = useState(null);

//   const columns = useMemo(
//     () => [
//       {
//         field: 'photoURL',
//         headerName: 'Avatar',
//         width: 60,
//         renderCell: (params) => <Avatar src={params.row.photoURL} />,
//         sortable: false,
//         filterable: false,
//       },
//       { field: 'name', headerName: 'Name', width: 170 },
//       { field: 'email', headerName: 'Email', width: 200 },
//       {
//         field: 'role',
//         headerName: 'Role',
//         width: 100,
//         type: 'singleSelect',
//         valueOptions: ['basic', 'editor', 'admin'],
//         editable: true,
//       },
//       {
//         field: 'active',
//         headerName: 'Active',
//         width: 100,
//         type: 'boolean',
//         editable: true,
//       },
//       {
//         field: 'createdAt',
//         headerName: 'Created At',
//         width: 200,
//         renderCell: (params) =>
//           moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
//       },
//       { field: '_id', headerName: 'Id', width: 220 },
//     ],
//     []
//   );

//   // Placeholder user data for testing
//   const users = [
//     {
//       _id: '1',
//       photoURL: 'avatar1.jpg',
//       name: 'User 1',
//       email: 'user1@example.com',
//       role: 'admin',
//       active: true,
//       createdAt: new Date(),
//     },
//     {
//       _id: '2',
//       photoURL: 'avatar2.jpg',
//       name: 'User 2',
//       email: 'user2@example.com',
//       role: 'editor',
//       active: false,
//       createdAt: new Date(),
//     },
//     {
//       _id: '3',
//       photoURL: 'avatar2.jpg',
//       name: 'User 2',
//       email: 'user2@example.com',
//       role: 'editor',
//       active: false,
//       createdAt: new Date(),
//     },
//     {
//       _id: '4',
//       photoURL: 'avatar2.jpg',
//       name: 'User 2',
//       email: 'user2@example.com',
//       role: 'editor',
//       active: false,
//       createdAt: new Date(),
//     },
//     {
//       _id: '5',
//       photoURL: 'avatar2.jpg',
//       name: 'User 2',
//       email: 'user2@example.com',
//       role: 'editor',
//       active: false,
//       createdAt: new Date(),
//     },
//     {
//       _id: '6',
//       photoURL: 'avatar2.jpg',
//       name: 'User 2',
//       email: 'user2@example.com',
//       role: 'editor',
//       active: false,
//       createdAt: new Date(),
//     },
//     // Add more user data as needed
//   ];

//   return (
//     <Box
//       sx={{
//         height: 400,
//         width: '100%',
//       }}
//     >
//       <Typography
//         variant="h3"
//         component="h3"
//         sx={{ textAlign: 'center', mt: 3, mb: 3 }}
//       >
//         Manage Users
//       </Typography>
//       <DataGrid
//         columns={columns}
//         rows={users}
//         getRowId={(row) => row._id}
//         rowsPerPageOptions={[5, 10, 20]}
//         pageSize={pageSize}
//         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//         getRowSpacing={(params) => ({
//           top: params.isFirstVisible ? 0 : 5,
//           bottom: params.isLastVisible ? 0 : 5,
//         })}
//         sx={{
//           [`& .${gridClasses.row}`]: {
//             bgcolor: (theme) =>
//               theme.palette.mode === 'light' ? grey[200] : grey[900],
//           },
//         }}
//         onCellEditCommit={(params) => setRowId(params.id)}
//       />
//     </Box>
//   );
// };

// export default Users;


import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'userId', headerName: 'User ID', width: 150 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'fullName', headerName: 'Full Name', width: 200 },
  {
    field: 'profilePictureUrl',
    headerName: 'Profile Picture URL',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    width: 200,
  },
  { field: 'bio', headerName: 'Bio', width: 200 },
  {
    field: 'followersCount',
    headerName: 'Followers Count',
    width: 150,
  },
  {
    field: 'followingCount',
    headerName: 'Following Count',
    width: 150,
  },
  {
    field: 'creationDate',
    headerName: 'Date of Account Creation',
    width: 250,
  },
  {
    field: 'privacySettings',
    headerName: 'Privacy Settings',
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    userId: '1',
    username: 'user1',
    fullName: 'User One',
    profilePictureUrl: 'URL1',
    email: 'user1@example.com',
    bio: 'This is user one',
    followersCount: 100,
    followingCount: 50,
    creationDate: '2023-01-01',
    privacySettings: 'Public',
  },
  {
    id: 2,
    userId: '2',
    username: 'user2',
    fullName: 'User Two',
    profilePictureUrl: 'URL2',
    email: 'user2@example.com',
    bio: 'This is user two',
    followersCount: 200,
    followingCount: 75,
    creationDate: '2023-02-01',
    privacySettings: 'Private',
  },
  {
    id: 3,
    userId: '2',
    username: 'user2',
    fullName: 'User Two',
    profilePictureUrl: 'URL2',
    email: 'user2@example.com',
    bio: 'This is user two',
    followersCount: 200,
    followingCount: 75,
    creationDate: '2023-02-01',
    privacySettings: 'Private',
  },
  {
    id: 4,
    userId: '2',
    username: 'user2',
    fullName: 'User Two',
    profilePictureUrl: 'URL2',
    email: 'user2@example.com',
    bio: 'This is user two',
    followersCount: 200,
    followingCount: 75,
    creationDate: '2023-02-01',
    privacySettings: 'Private',
  },
  {
    id: 5,
    userId: '2',
    username: 'user2',
    fullName: 'User Two',
    profilePictureUrl: 'URL2',
    email: 'user2@example.com',
    bio: 'This is user two',
    followersCount: 200,
    followingCount: 75,
    creationDate: '2023-02-01',
    privacySettings: 'Private',
  },
  {
    id: 6,
    userId: '2',
    username: 'user2',
    fullName: 'User Two',
    profilePictureUrl: 'URL2',
    email: 'user2@example.com',
    bio: 'This is user two',
    followersCount: 200,
    followingCount: 75,
    creationDate: '2023-02-01',
    privacySettings: 'Private',
  },
  {
    id: 7,
    userId: '2',
    username: 'user2',
    fullName: 'User Two',
    profilePictureUrl: 'URL2',
    email: 'user2@example.com',
    bio: 'This is user two',
    followersCount: 200,
    followingCount: 75,
    creationDate: '2023-02-01',
    privacySettings: 'Private',
  },

  
  // Add more user data as needed
];

function UserDataTable() {
  const [pageSize, setPageSize] = useState(5);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserDataTable;
