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
        .map((row)=>row
            .map((cell)=>cell.trim()));
}

export {
    sanitizedArray,
    formatArrayToMatrix,
    splitStringToArray
}