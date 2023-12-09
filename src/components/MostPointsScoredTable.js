import React from 'react'
import { useLocation } from "react-router-dom";

function MostPointsScoredTable(){
    const location = useLocation();
    const data = location.state["data"];

    const sortedData=data.sort((a,b)=>{
        return b[3]-a[3];
    })

    return(
        <>
            <h2>Most Points Scored in a Single Game</h2>
            <table>
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
            </table>
        </>
    );
}

export default MostPointsScoredTable;