import { useLocation } from "react-router-dom";
import Header from "../atoms/Header";
import Table from "../organism/Table";
import { addPlacement } from "../../utils/dataUtils";

function MostPointsScoredByTimePlayedTable(){
    const location = useLocation();
    const data = location.state["data"];
    
    const modifiedData=data.map((row)=>{
        const points = row[3];
        const timePlayed = row[2];
        row.push((points/timePlayed).toFixed(3));
        row.splice(3,1);
        return row;
    });

    const sortedData=modifiedData.sort((a,b)=>{
        return b[3]-a[3];
    });

    const dataHead=["Placement", "Player name", "Team", "Time played in seconds", "Points scored per second"];
    const dataBody = addPlacement(sortedData);

    return(
        <>
            <Header text="Most Points Scored by Time Played in a Single Game"/>
            <Table dataHead={dataHead} dataBody={dataBody}/>
            {/* <table>
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
            </table> */}
        </>
    );
}

export default MostPointsScoredByTimePlayedTable;