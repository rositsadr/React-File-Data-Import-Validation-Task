import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../atoms/Header';
import Table from '../organism/Table';
import { addPlacement } from '../../utils/dataUtils';

function MostPointsScoredByPlayerInAllGamesTable() {
    const location = useLocation();
    const data = location.state["data"];
    const playerData=[];

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

    data.forEach((entry)=>{
        const playerName = entry[0];
        const playerTeam = entry[1];
        const playerPoints = entry[3];

        if(playerData.find((player)=>player.name === playerName)){
            const index= playerData.findIndex((player)=> player.name === playerName);
            playerData[index].points = +playerData[index].points + +playerPoints;
        }else{
            playerData.push({name:playerName,team:playerTeam,points:playerPoints});
        }       
    });

    const sortedData = playerData
        .map((player)=>Object.values(player))
        .sort((a,b)=>
            {
                return b[2]-a[2];
            }
    );

    const dataHead = ["Placement","Player","Team","Scored points"];
    const dataBody = addPlacement(sortedData);

    return(
        <>
            <Header text="Player Points Scored Ranking"/>
            <Table dataBody={dataBody} dataHead={dataHead}/>
        </>
    );
}

export default MostPointsScoredByPlayerInAllGamesTable;