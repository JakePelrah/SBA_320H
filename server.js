// Import necessary modules
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import query from './db.js';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the port for the server
const port = process.env.PORT || 5001
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from 'dist'


app.post('/cardQuery', async (req, res) => {
  const { colors, type, sliderValues } = req.body
  const { type: typeArray, subtype: subtypeArray } = type;
  const { cmc, power, toughness } = sliderValues
  console.log(cmc, power, toughness)

  const { rows } = await query(`SELECT * FROM cards 
   WHERE colors @> ARRAY[$1::varchar[]] 
   AND types @> ARRAY[$2::varchar[]] 
   AND subtypes @> ARRAY[$3::varchar[]] 
   AND cmc BETWEEN $4 AND $5
   AND power BETWEEN $6 AND $7
   AND toughness BETWEEN $8 AND $9

   LIMIT 100`, [colors, typeArray, subtypeArray, cmc[0], cmc[1], power[0], power[1], toughness[0], toughness[1]]);
  res.json(rows)
})

// Handle client-side routing, returning all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Send index.html for client-side routing
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});