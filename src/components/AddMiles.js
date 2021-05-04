import { Component } from 'react'

class AddMiles extends Component {
    constructor() {
        super()
        this.state = {
            distance: 0,
            date: new Date()
        }
    }

    handleDistance = (value) => {
        this.setState({ distance: value })
    }

    handleDate = (value) => {
        this.setState({ date: value })
    }


    render() {
        return (
            <div className='add-run'><h2>Log Run</h2>
                <input className='number'
                    value={this.state.distance}
                    onChange={(e) => this.handleDistance(e.target.value)}

                />
                <input className='date'
                    value={this.state.date}
                    onChange={(e) => this.handleDate(e.target.value)}

                />
                <button className='addmiles' onClick={() => {
                    this.props.addRun(this.state.distance, this.state.date)
                    this.setState(
                        {
                            distance: 0,
                            date: new Date()
                        }
                    )
                }
                } >Add Miles</button>
            </div>
        )
    }
}

export default AddMiles