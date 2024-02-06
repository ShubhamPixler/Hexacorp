import React from "react";
import Grid from '@mui/material/Grid';


export default function ConstructionServiceCard(props) {
    return (
        <>
            <Grid item  md={3}>
                <div className="categoriesCard">
                    <img src={props.url} />
                    <p>{props.name}</p>
                </div>
            </Grid>
        </>
  )   
}