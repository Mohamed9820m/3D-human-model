const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 3002; 

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});