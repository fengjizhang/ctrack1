const express = require('express');
const port = 3000;

//middleware add
const app = express();

/** 
 * All routes. 
 * 
 * Section 1, the ISS.
 */
app.get('/ISSCurrentCoords', (req, res) => {
  res.send('ISS Current C');
})

app.get('/ISSPastCoords', (req, res) => {
  res.send('ISS Past C');
})

app.post('/ISSCurrentCoords', (req, res) => {
  res.send('Posting current Coords');
})

app.put('/UpdateISSCoords', (req, res) => {
  res.send('Updating ISS Coords');
})
//For resetting purposes, if database stops working.
app.delete('/DeleteAll', (req, res) => {
  res.send('Trying to delete all');
})
/**
 * End Section 1 , ISS.
 */



/**
 * Section 2, Planes
 */
app.get('/getPlaneC', (req, res) => {
  res.send('Hello World!')
})



/**
 * End Section 2, Planes.
 */

//Server section.
app.listen(port, () => {
  console.log(`Server started! Listening on port ${port}`)
})