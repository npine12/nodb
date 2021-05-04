let runs = [
    {
        id: 1,
        distance: 5,
        date: new Date(2021, 04, 12)

    },
    {
        id: 2,
        distance: 7,
        date: new Date(2021, 04, 13)

    }
]
let id = 3

module.exports = {
    getRuns: (req, res) => {
        res.status(200).send(runs)
    },
    addRun: (req, res) => {
        const { distance, date } = req.body
        runs.push({
            id, distance: +distance, date
        })
        id++
        res.status(201).send(runs)
    },
    deleteRun: (req, res) => {
        const { id } = req.params
        const index = runs.findIndex((e) => {
            return e.id === +id
        })
        if (index === -1) {
            return res.status(404).send("Run not found")
        }
        runs.splice(index, 1)
        res.status(200).send(runs)
    },
    editRun: (req, res) => {
        const { id } = req.params
        const { distance, date } = req.body
        const index = runs.findIndex((e) => {
            return e.id === +id
        })
        let run = runs[index]
        run.distance = distance
        run.date = date
        runs.splice(index, 1, run)
        res.status(200).send(runs)
    }
}