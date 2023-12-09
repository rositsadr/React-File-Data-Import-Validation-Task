import { useLocation } from "react-router-dom";

function MostPointsScoredByTimePlayedTable(){
    const location = useLocation();
    const data = location.state["data"];
    
    const modifiedData=data.map((row)=>{
        const points=row[3];
        const timePlayed=row[2];
        row.push((points/timePlayed).toFixed(3));
        return row;
    });

    const sortedData=modifiedData.sort((a,b)=>{
        return b[4]-a[4];
    });

    return(
        <>
            <h2>Most Points Scored by Time Played in a Single Game</h2>
            <table>
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Player name</th>
                        <th>Team</th>
                        <th>Time played(s)</th>
                        <th>Points scored</th>
                        <th>Points scored per second</th>
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
                                <td>{row[4]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default MostPointsScoredByTimePlayedTable;