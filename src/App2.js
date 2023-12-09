import { useState } from 'react';
import './App.css';
import { sanitizedArray, formatArrayToMatrix, splitStringToArray } from './utils/dataUtils';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const[data, setData] = useState([]);

  function handleFileUpload(e){
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    const errors = [];
    reader.readAsText(file);
    /**if we set a timer to wait for the reader to read the file as text 
     *it will give the result- not undefine, this is asyncronic function and it
     * needs some time to finish.
     */
    // setTimeout(() => {
    //   console.log(reader.result);
    // },2000);

    reader.onload = function(){
      const dataArr = splitStringToArray(reader.result);
      const dataMatrix = formatArrayToMatrix(dataArr);
      const sanitizedArr = sanitizedArray(dataMatrix);

      sanitizedArr.forEach((row,index) => {
          if (row.length!==4){
            errors.push(index+1);
          }
      });

      if(errors.length){
        errors.forEach((error)=>{
          console.error(`Data on row ${error} is invalid!`)
        })
      }

      setData(dataMatrix);
    };
  }

  return (
    <div className="App">
      <h1>Home Page</h1>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/test-page">Test Page</NavLink>
      <NavLink to={"/overall-table"} state={{data:data}}>
        General Table Page
      </NavLink>
      <NavLink to={"/team-table"} state={{data:data}}>
        Team Table Page
      </NavLink>
      <NavLink to={"/points-table"} state={{data:data}}>
        Points Table Page
      </NavLink>
      <NavLink to={"/time-table"} state={{data:data}}>
        Time Table Page
      </NavLink>
      {/* <NavLink to="/post">Post Page</NavLink> */}
      
      <input type="file" onChange={handleFileUpload}/>
      
      {!!data.length && <Outlet/>}
    </div>
  );
}

export default App;
