import React from 'react'

const Rating = ({scoreUp, scoreDown}) => {
  return(
    <table className="RatingTable">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{scoreUp}</td>
          <td>{scoreDown}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Rating
