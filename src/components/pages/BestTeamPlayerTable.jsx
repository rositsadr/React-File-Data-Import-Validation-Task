import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../atoms/Header';
import Table from '../organism/Table';

function BestTeamPlayerTable() {
    const location = useLocation();
    const data = location.state["data"];
    const playerData=[];

    data.forEach((entry)=>{
        const playerName = entry[0];
        const playerTeam = entry[1];
        const playerPoints = entry[3];

        if(playerData.includes((player)=>player.name === playerName)){
            const index= playerData.findIndex((player)=> player.name === playerName);
            playerData[index].points = +playerData[index].points + +playerPoints;
        }else{
            playerData.push({name:playerName,team:playerTeam,points:playerPoints});
        }       
    });

    const someData = [];

    const sortedData = playerData
    .sort((a,b)=>
        {
            return b.points-a.points;
        }
    );

    sortedData.forEach((player)=>{
        if(!someData.find((pl)=>pl.team===player.team)){
            someData.push(player);
        }
    })

console.log(someData);

    const dataHead = ["Best Player","Team", "Scored points"];
    const dataBody = someData.map((player)=>Object.values(player).sort((a,b)=>b[1]-a[1]));


    return(
        <>
            <Header text="Teams Best Player Ranking"/>
            <Table dataBody={dataBody} dataHead={dataHead}/>
        </>
    );
}

export default BestTeamPlayerTable; 