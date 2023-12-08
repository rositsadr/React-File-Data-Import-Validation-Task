import { useState } from 'react';
import './App.css';
import { sanitizedArray, formatArrayToMatrix, splitStringToArray } from './utils/dataUtils';
import DataTable from './components/DataTable';
import MostPointsScoredTable from './components/MostPointsScoredTable';
import MostPointsScoredByTimePlayedTable from './components/MostPointsScoredByTimePlayedTable';

function App() {
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
          if (row.length!==4){
            errors.push(index+1);
          }
      });

      if(errors.length){
        errors.forEach((error)=>{
          console.error(`Data on row ${error} is invalid!`)
        })
      }

      setData(dataMatrix);
    };
  }


  return (
    <div className="App">
      <input type="file" onChange={handleFileUpload}/>
      {!!data.length && (
        <>
        <DataTable data={data}/>
        <MostPointsScoredTable data={data}/>
        <MostPointsScoredByTimePlayedTable data={data}/>
        </>
      )}
    </div>
  );
}

export default App;
