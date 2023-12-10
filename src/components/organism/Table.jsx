import React from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table({dataHead, dataBody}) {
  return (
    <table>
        <TableHead data={dataHead}/>
        <TableBody data={dataBody}/>
    </table>
  )
}

export default Table