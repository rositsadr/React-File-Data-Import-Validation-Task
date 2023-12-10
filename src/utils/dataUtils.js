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

export {
    sanitizedArray,
    formatArrayToMatrix,
    splitStringToArray
}