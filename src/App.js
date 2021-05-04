import { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddMiles from './components/AddMiles'
import Miles from './components/Miles'


class App extends Component {
  constructor() {
    super()
    this.state = {
      runs: []
    }
  }
  componentDidMount() {
    axios.get('/api/runs')
      .then((res) => this.setState({ runs: res.data }))
      .catch((err) => console.log(err))
  }

  deleteRun = (id) => {
    axios.delete(`/api/run/${id}`)
      .then((res) => this.setState({ runs: res.data }))
      .catch((err) => console.log(err))
  }

  addRun = (distance, date) => {
    axios.post('/api/run', { distance, date })
      .then((res) => this.setState({ runs: res.data }))
      .catch((err) => console.log(err))
  }

  editRun = (id, distance, date) => {
    console.log(id)
    axios.put(`/api/run/${id}`, { distance, date })
      .then((res) => {
        this.setState({ runs: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {

    return (
      <div className='app'>
        <header>Daily Run Tracker</header>
        <div className='content'>
          <AddMiles addRun={this.addRun} />
          <div className='runs'>

            {this.state.runs.map((run) => {
              return (
                <Miles
                  run={run}
                  deleteRun={this.deleteRun}
                  editRun={this.editRun}
                />
              )
            })}
            <h2>Total Miles Run: {this.state.runs.reduce((runningTotal, run) => { return runningTotal + +run.distance }, 0)}</h2>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
