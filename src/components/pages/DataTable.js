import { useLocation } from "react-router-dom";
import Header from "../atoms/Header";
import Table from "../organism/Table";

function DataTable(){
    const location = useLocation();
    const data = location.state["data"];

    const dataHead = ["Player name","Team","Time played in sec.","Scored Points"];

    return(
        <>
            <Header text="General Table" />
            <Table dataHead={dataHead} dataBody={data}/>
            {/* <table>
                <thead>
                    <tr>
                        <th>Player name</th>
                        <th>Team</th>
                        <th>Time played in sec.</th>
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
            </table> */}
        </>
        
    );
}

export default DataTable;