import React, {Component, Fragment} from "react";
import { Link } from 'react-router-dom'
export default class Movies extends Component {

    state = {movies: []}

    componentDidMount() {
        this.setState({
            movies:[
                {id: 1, title: "Spider Man", runtime: 142},
                {id: 2, title: "Iron Man", runtime: 182},
                {id: 3, title: "Bat Man", runtime: 144},
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Choose a movie</h2>

                <ul>
                    {this.state.movies.map( (m) =>
                        <li key = {m.id}>
                            <Link to={`/movies/${m.id}`}>{m.title}</Link>
                        </li>
                    )}
                </ul>
            </Fragment>
        )
    }
}