const express = require('express')
const cors = require('cors')
const route = require('./routes/route.js')

const app = express()

app.use(express.json())
app.use(cors())

//error Handling
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).send({ message: err.message });
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/', route);

const PORT = 4000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

