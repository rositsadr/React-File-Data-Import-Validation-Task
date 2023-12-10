import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../atoms/Header';

function MostPointsScoredByTeamTable() {
    const location = useLocation();
    const data = location.state["data"];

    const teamsData = data.reduce((prev, next)=>{
        const [, team, ,points] = next;
        if(prev[team]){
            prev[team] = prev[team]+ +points;
        } else {
            prev[team] = +points;
        }
        return prev;
    }, {});

    const sortedData=Object.entries(teamsData).sort((a,b)=>{
        return b[1]-a[1];
    })

    return(
        <>
            <Header text="Teams Points Scored Ranking"/>
            <table>
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Team</th>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default MostPointsScoredByTeamTable;