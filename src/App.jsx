
// import DataGridComponent from './ComponentData_grid'
import MediaControlCard from './Card'
import Users from './Data_grid'
import Fetch from './Fetch'
import { Chart as ChartJS } from "chart.js/auto";

import './App.css'
import { InstaFollow } from './Cards1'
import FollowerGrowthChart from './Charts'


const cardData = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 }
];


function App() {

 
  

  return (
    <>
      <div>

        
      <h2>CHARTS</h2>
      <FollowerGrowthChart/>
{/* 
        <h2>

          Fetch Data Using Axios and Display using Material UI;
          <Fetch/>

        </h2>

       
      <h2>Card</h2>
      <MediaControlCard />
      <br />

      <h2>Card1</h2>
      <div className='Card1'> {cardData.map((data) => (
        <InstaFollow key={data.key} />
      ))}</div>
    
      <br /> */}

     {/* /DATA GRID */}
      {/* <h2>Data Grid</h2>
      <Users/>
       
      <br /> */}


      </div>
      
    </>
  )
}

export default App
