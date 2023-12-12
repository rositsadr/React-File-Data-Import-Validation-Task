import React from 'react'
import { useLocation } from "react-router-dom";
import Header from '../atoms/Header';
import Table from '../organism/Table';
import { addPlacement } from '../../utils/dataUtils';

function MostPointsScoredTable(){
    const location = useLocation();
    const data = location.state["data"];

    const sortedData=data
        .filter((player,index)=>player[index]!==player[2])
        .map((pl)=>pl)
        .sort((a,b)=>{
        return b[2]-a[2];
    })

    const dataHead=["Placement", "Player name", "Team", "Time played", "Scored points"];
    const dataBody = addPlacement(sortedData);

    return(
        <>
            <Header text="Most Points Scored in a Single Game" />
            <Table dataHead={dataHead} dataBody={dataBody}/>
            {/* <table>
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Player name</th>
                        <th>Team</th>
                        <th>Time played(s)</th>
                        <th>Points scored</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}.</td>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
        </>
    );
}

export default MostPointsScoredTable;