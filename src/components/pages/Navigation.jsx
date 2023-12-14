import React from 'react';
import { useState } from 'react';
import { sanitizedArray, formatArrayToMatrix, splitStringToArray } from '../../utils/dataUtils';
import { NavLink, Outlet } from 'react-router-dom';
import FileInput from '../atoms/FileInput';

function Navigation() {
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
            if (row.length!==4 
                || isNaN(row[3]) 
                || isNaN(row[2])){
              errors.push(index+1);
            }
          });
    
          console.log(errors);
    
          if(!!errors.length){
            errors.forEach((error)=>{
              console.log(`Data on row ${error} is invalid!`);
              alert(`Data on row ${error} is invalid!`);
            });
            return;
          }
    
          setData(sanitizedArr);
        };
    }
    return (
    <>
    <NavLink to="/">Home Page</NavLink>
        <NavLink to={"/overall-table"} state={{data:data}}>
          General Table Page
        </NavLink>
        <NavLink to={"/team-table"} state={{data:data}}>
          Team Table Page
        </NavLink>
        <NavLink to={"/players-table"} state={{data:data}}>
          Player Table Page
        </NavLink>
        <NavLink to={"/points-table"} state={{data:data}}>
          Points Table Page
        </NavLink>
        <NavLink to={"/time-table"} state={{data:data}}>
          Time Table Page
        </NavLink>     
        <NavLink to={"/team-player-table"} state={{data:data}}>
          Teams Best Player Table Page
        </NavLink>     
        {/* <input type="file" onChange={handleFileUpload}/> */}
        <FileInput handleChange={handleFileUpload}/>
        {!!data.length && <Outlet/>}
    </>       
    );
}

export default Navigation;