import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../atoms/Header';
import Table from '../organism/Table';
import { dataExtractor } from '../../utils/dataUtils';

function BestTeamPlayerTable() {
    const location = useLocation();
    const data = location.state["data"];
    const extractSortedData=dataExtractor(data);

    const playerData = [];

    extractSortedData.forEach((player)=>{
        if(!playerData.find((pl)=>pl.team===player.team)){
            playerData.push(player);
        }
    });

    const dataHead = ["Best Player","Team", "Scored points"];
    const dataBody = playerData.map((player)=>Object.values(player));


    return(
        <>
            <Header text="Teams Best Player Ranking"/>
            <Table dataBody={dataBody} dataHead={dataHead}/>
        </>
    );
}

export default BestTeamPlayerTable; 