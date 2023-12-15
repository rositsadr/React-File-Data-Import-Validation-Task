import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import FileInput from '../atoms/FileInput';
import { useData } from '../../hooks/useData';

function Navigation() {
    const {data, handleFileUpload} = useData();
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