import React from 'react'
import TableCell from '../atoms/TableCell';

function TableRow({data, cellType}) {
  return (
    <tr>
      {data.map((field) => <TableCell key={field} value={field} type={cellType}/>)}
    </tr>
  );
}

export default TableRow