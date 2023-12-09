import { useLocation } from "react-router-dom";

function DataTable(){
    const location = useLocation();
    const data = location.state["data"];
    return(
        <>
            <h1>General Statistics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Player name</th>
                        <th>Team</th>
                        <th>Time played(s)</th>
                        <th>Points scored</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index)=>{
                        return(
                            <tr key={index}>
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

export default DataTable;