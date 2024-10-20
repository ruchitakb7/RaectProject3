import React from "react";
import "./candytable.css"

const CandyTable = (props) => {
  const { candyArray } = props;

  
  if (candyArray.length === 0) {
    return <p>No candies added yet.</p>;
  }

  return (
    <table border="1" style={{ width: "50%", margin: "20px auto" }}>
      <thead>
        <tr>
          <th>Candy Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {candyArray.map((candy, index) => (
          <tr key={index}>
            <td>{candy.candyname}</td>
            <td>{candy.candydesc}</td>
            <td>${candy.candyprice.toFixed(2)}</td>
            <td>
                <button>Buy 1</button> <spam><button>Buy 1</button></spam> <spam><button>Buy 1</button></spam>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandyTable;
