import React, { Component, Fragment } from 'react'

export default class OneMovie extends Component {
    state = { movie: {} }

    componentDidMount() {
        this.setState({movie: {
            id: this.props.match.params.id,
            title:"Some movie",
            runtime: '150',
        }})
    }

    render() {
        return (
            <Fragment>
                <h2>Movie: {this.state.movie.titl}</h2>

                <table className='table table-comapact table-striped'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Title:</strong></td>
                            <td><strong>{this.state.movie.title}</strong></td>
                        </tr>

                        <tr>
                            <td><strong>Run time:</strong></td>
                            <td><strong>{this.state.movie.runtime} min</strong></td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}