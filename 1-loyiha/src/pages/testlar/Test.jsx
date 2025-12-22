
import './test.css'
import { NavLink } from 'react-router-dom'
const Test = () => {
  return (
    <div data-aos="fade-left" className="test">
      <h1>Exercises based on the story “The Juryman” by J. Glastworthy

        Week I. Pre-reading activities. Vocabulary exercises
      </h1>
      <div className="cardlar">
        <div className="qator-1">

          <NavLink to="/taskone">
            <div className="card1">
              <h1>Literal</h1>
            </div>
          </NavLink>

          <NavLink to="/tasktwo">

            <div className="card1">
              <h1> Reorganization</h1>
            </div>
          </NavLink>
        </div>


        <div className="qator-2">

          <NavLink to="/taskthree">

            <div className="card1">
              <h1> Inferential</h1>
            </div>
          </NavLink>

          <NavLink to="/taskfour">

            <div className="card1">
              <h1>Evaluative</h1>
            </div>
          </NavLink>

        </div>

        <div className="qator-3">

          <NavLink to="/taskfive">

            <div className="card1">
              <h1> Appreciative</h1>
            </div>
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default Test
