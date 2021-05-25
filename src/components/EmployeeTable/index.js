import React from "react";
import "./style.css";

function EmployeeTable (props) {
    return (
    <tr>
      <th scope="row" id={props.id} > {props.id}</th>
      <td>
        <img src={props.image} className="headshots" alt={props.name} height="120px" width="120px"/>
      </td>
      <td>{props.name}</td>
      <td>{props.role}</td>
      <td>{props.email}</td>
    </tr>
    );
  }

export default EmployeeTable;
