import { Component } from 'react'

class Miles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            distance: props.run.distance,
            date: props.run.date

        }
    }

    handleDistance = (value) => {
        this.setState({ distance: value })
    }
    handleDate = (value) => {
        this.setState({ date: value })
    }

    toggleEdit = () => {
        console.log('bob')
        this.setState({ editMode: !this.state.editMode }
        )
    }

    render() {
        return this.state.editMode ? (
            <div>
                <input type='number'

                    value={this.state.distance}
                    onChange={
                        (e) => this.handleDistance(e.target.value)
                    } />
                <input type='date'
                    value={this.state.date}
                    onChange={
                        (e) => this.handleDate(e.target.value)
                    } />
                <button onClick={() => {
                    this.props.editRun(this.props.run.id, this.state.distance, this.state.date)
                    this.toggleEdit()
                }
                }>Save</button>
                <button onClick={() => this.toggleEdit()}>Cancel</button>
            </div>
        ) : (
            < div > <section>
                <span>{this.props.run.date.split('T')[0]}</span>
                <h3>{this.props.run.distance} Miles</h3>
            </section>
                <button onClick={() => this.props.
                    deleteRun(this.props.run.id)} >
                    Delete Run
                    </button>
                <button onClick={() => this.toggleEdit()}>
                    Edit</button>
            </div >
        )
    }
}
export default Miles