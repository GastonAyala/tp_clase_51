import React from 'react'

function TableHead({ items }) {
  return (
    <thead>
        <tr>
            {items.map((item, i) => <th key={i} scope='col'>{item}</th>)}
        </tr>
    </thead>
  )
}

export default TableHead