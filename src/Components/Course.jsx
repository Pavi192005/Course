import React from 'react'
import Grid from '@mui/material/Grid'

function Course(props) {
  return (
    <>
    <Grid container sx={{
      backgroundColor: "lightblue",
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid black",
      flexDirection: "column",
      gap: "10px",
      margin:"10px",
      display: "inline-flex",
      width: "30%",
    }}>
      <h2>{props.name}</h2>
      <p>Trainer: {props.trainer}</p>
      <p>Duration: {props.duration}</p>
      </Grid>
    </>
  )
}

export default Course
