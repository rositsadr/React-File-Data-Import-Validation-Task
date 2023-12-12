function splitStringToArray(string){
    return string.split(/(\r\n|\n|\r|\n\r)/g);
}

function formatArrayToMatrix(array){
    return array
        .filter((row)=>row.trim().length!==0)
        .map((row)=>row.split(",")
        //              .map((cell)=>cell.trim())
        );

}

function sanitizedArray(matrix){
    return matrix
        .map((row)=>{
            row[2]=fromMinutesToSeconds(row[2]);
            return row.map((cell)=>cell.trim());
        });
}

function fromMinutesToSeconds(minutes){
    const timeArr = minutes.split(":");
    const seconds = (timeArr[0]*60)+ +timeArr[1];
    return seconds.toString();
}

function addPlacement(data){
    return data
        .map((entry,index)=>
            {
                entry.unshift(index+1);
                return entry;
        });
}

function dataExtractor(data){
    const playerData=[];

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
    .sort((a,b)=>
        {
            return b.points-a.points;
        }
    );

    return sortedData;
}

export {
    sanitizedArray,
    formatArrayToMatrix,
    splitStringToArray,
    addPlacement,
    dataExtractor
}