import { useState } from 'react';
import { sanitizedArray, formatArrayToMatrix, splitStringToArray } from '../utils/dataUtils';
import { arrayLengthValidation } from '../utils/validations';

function useData() {
    const[data, setData] = useState([]);
    function handleFileUpload(e){
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        const errors = [];
        reader.readAsText(file);
        /**if we set a timer to wait for the reader to read the file as text 
         *it will give the result- not undefine, this is asyncronic function and it
         * needs some time to finish.
         */
        // setTimeout(() => {
        //   console.log(reader.result);
        // },2000);
    
        reader.onload = function(){
          const dataArr = splitStringToArray(reader.result);
          const dataMatrix = formatArrayToMatrix(dataArr);
          const sanitizedArr = sanitizedArray(dataMatrix);
    
          sanitizedArr.forEach((row,index) => {
            if (!arrayLengthValidation(row) 
                || isNaN(row[3]) 
                || isNaN(row[2])){
              errors.push(index+1);
            }
          });
    
          if(!!errors.length){
            errors.forEach((error)=>{
              console.log(`Data on row ${error} is invalid!`);
              alert(`Data on row ${error} is invalid!`);
            });
            return;
          }
    
          setData(sanitizedArr);
        };
    }
    return {data, handleFileUpload}
}

export  {useData};