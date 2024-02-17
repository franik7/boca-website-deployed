const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.static(`${__dirname}/public/`))

//ROUTES
app.get('/boca', (req, res) => {
    res.send(`
    Dale, dale, dale, dale, dale, dale, dale, Boca
    Dale, dale, dale, dale, dale, dale, dale, Bo
    
    (repeated 6 times)
    `
       
    )
})

app.listen(PORT, console.log(`Listening on ${PORT}`))