import React from "react";

export default function HomeMaintenanceCard(props) {
    return (
        <>
        <div className="categoriesCard">
            <img src={props.url} />
            <p>{props.name}</p>
        </div>
        </>
  )   
}