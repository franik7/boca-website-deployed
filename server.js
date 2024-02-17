const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.static(`${__dirname}/public/`))

//ROUTES
app.get('/boca', (req, res) => {
    res.send(`
    Dale dale dale Bo                                              
    a todas partes voy con vos                                  
    te sigo de la cuna hasta el cajón                          
    y te llevo adentro de mi corazón                         
    y dale Bo’                                                           
    y dale dale Boca                                                 
    y dale Bo’ y dale dale Bo’                                   
    y dale Bo’                                                       
    y dale dale Boca                                               
    y dale Boca                                                      
    y dale dale Bo’. Bostero soy...
    `
    
    
    )
})

app.listen(PORT, console.log(`Listening on ${PORT}`))