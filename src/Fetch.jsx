import { useEffect, useState} from "react";
import axios from 'axios';
import './App.css'
import DataGridComponent from "./ComponentData_grid";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'username', headerName: 'UserName', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'website', headerName: 'Website', width: 200 },
    { field: 'address', headerName: 'Address', width: 200, renderCell: (params) => {
      
      return params.row.address.city;
    },
    
    },
     { field: 'zipcode', headerName: 'ZipCode', width: 200, renderCell: (params) => {
      
      return params.row.address.zipcode;
    },
    
    },
    { field: 'company', headerName: 'Company', width: 200, renderCell: (params) => {
     
      return params.row.company.name;
    },
    },
   
  ];



export default function Fetch() {

    const  [data, setData] = useState([]);

    useEffect(() => {

         axios.get('https://jsonplaceholder.typicode.com/users')
           .then((response) => {

        // console.log(response.data);
         console.log(response.data);

        setData(response.data);
        
    }).catch((err) => console.log(err));
    
       }, []);
      
   //data grid condition


  return (
    <div className="App">
      <DataGridComponent
       data={data} 
       columns={columns}/>
         
         {/* <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((user, index) =>{
                            return <tr key={index}>
                                       <td>{user.id}</td> 
                                       <td>{user.name}</td> 
                                       <td>{user.email}</td> 
                                       <td>{user.address.city}</td> 
                            </tr>
                        })
                    }
                </tbody>
            </table>
         </div> */}

    </div>
  );
}
