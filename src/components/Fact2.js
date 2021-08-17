import React from 'react'
import energySave from '../energySave.jpg'

const Fact2 = (props) => {

    return (
        <div id="objects">
            <div id="picCont">
                <img id="pic2" src={energySave} alt="reduce energy cost" />
            </div>
            <div id="cont2" className="container">
                <h4 id="f2">Planting trees can help reduce your energy costs</h4>
                <p id="p2">Strategically planting trees and shrubs can save you up to 25 percent on your energy bills. A shade tree can help cool your home by as much as 20 degrees in the summertime. Not only do they provide shade in the summer, but serve as a windbreak in the winter, too.</p>
            </div>
        </div>
    )
}

export default Fact2