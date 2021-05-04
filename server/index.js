const express = require('express')

const app = express()

const PORT = 3393

const mileCtrl = require('./controllers/mileController')

app.use(express.json())

app.get('/api/runs', mileCtrl.getRuns)
app.post('/api/run', mileCtrl.addRun)
app.delete('/api/run/:id', mileCtrl.deleteRun)
app.put('/api/run/:id', mileCtrl.editRun)



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))