import React from 'react'

function TableRow({ title, length, rating, genre, awards }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>{title}</td>
      <td>
        <ul>
          {genre.map((g) => {
            return <li key={g}>{g}</li>
          })}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  )
}

export default TableRow