import './test2.css'
import { NavLink } from 'react-router-dom'
const Test2 = () => {
    return (
        <div data-aos="fade-left" className="test">
            <h1>Exercises for the story “The Last Night of the World” by R.Bradbury
                Week 1 exercises.

            </h1>
            <div className="cardlar">
                <div className="qator-1">

                    <NavLink to="/taskone1">
                        <div className="card1">
                            <h1>Literal</h1>
                        </div>
                    </NavLink>

                    <NavLink to="/tasktwo2">

                        <div className="card1">
                            <h1> Reorganization</h1>
                        </div>
                    </NavLink>
                </div>


                <div className="qator-2">

                    <NavLink to="/taskthree3">

                        <div className="card1">
                            <h1> Inferential</h1>
                        </div>
                    </NavLink>

                    <NavLink to="/taskfour4">

                        <div className="card1">
                            <h1>Evaluative</h1>
                        </div>
                    </NavLink>

                </div>

                <div className="qator-3">

                    <NavLink to="/taskfive5">

                        <div className="card1">
                            <h1> Appreciative</h1>
                        </div>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default Test2
