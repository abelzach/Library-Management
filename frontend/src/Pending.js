import React, { useState, useEffect } from "react";
import Header from "./Header";
import Axios from "axios";
import "./pending.css";

function Pending() {
  function refreshPage() {
    window.location.reload(false);
  }

  const [record, setrecord] = useState([]);

  const deletec = (Id , BId) => {
    console.log(Id);
    Axios.delete(`http://localhost:3001/api/deletec/${Id}/${BId}`);
    refreshPage();
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pending").then((response) => {
      console.log(response);
      setrecord(response.data);
    });
  }, []);

  return (
    <>
    <div className="pbody">
      <br />
      <br />
      <br />
      
      <center>
      <tbody className="tbody">
        <th className="table_col">Customer Id</th>
        <th className="table_col">Customer Name</th>
        <th className="table_col">Book Id</th>
        <th className="table_col">Book Name</th>
        <th className="table_col">Date</th>
        <th className="table_col">Return Date</th>
        &emsp;
        <th className="table_col">Return</th>
        {record.map((val) => {
          return (
            <tr className="table">
              <td className="table_content">{val.custId}</td>
              <td className="table_content">{val.custName}</td>
              <td className="table_content">{val.id}</td>
              <td className="table_content">{val.bookName}</td>
              <td className="table_content">{val.Date}</td>
              <td className="table_content">{val.retDate}</td>
              <td>
                <button
                  className="table_return"
                  onClick={() => deletec(val.custId , val.id)}
                >
                  Return
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
        <Header />
        </center>
        </div>
    </>
  );
}

export default Pending;
