import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../atoms/Header';
import Table from '../organism/Table';
import { addPlacement, dataExtractor } from '../../utils/dataUtils';

function MostPointsScoredByPlayerInAllGamesTable() {
    const location = useLocation();
    const data = location.state["data"];
    const extractSortedData=dataExtractor(data);

    // const playersData = data.reduce((prev,next)=>{
    //     const[name, , ,points]=next;
    //     if(prev[name]){
    //         prev[name]=prev[name]+ +points;
    //     }else{
    //         prev[name]=+points;
    //     }
    //     return prev;
    // },{});

    // const sortedData=Object.entries(playersData).sort((a,b)=>{
    //     return b[1]-a[1];
    // });

    const playerData = extractSortedData.map((player)=>Object.values(player));

    const dataHead = ["Placement","Player","Team","Scored points"];
    const dataBody = addPlacement(playerData);

    return(
        <>
            <Header text="Player Points Scored Ranking"/>
            <Table dataBody={dataBody} dataHead={dataHead}/>
        </>
    );
}

export default MostPointsScoredByPlayerInAllGamesTable;