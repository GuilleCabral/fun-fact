import React from 'react'
import PropertyValue from '../propertyValue.jpg'

const Fact4 = (props) => {

    return (
        <div id="objects">
            <div id="picCont">
                <img id="pic" src={PropertyValue} alt="eternal trees" />
            </div>
            <div id="cont4" className="container">
                <h4 id="f4">Well-kept landscapes with trees increase property value</h4>
                <p id="p4">Several recent nationwide surveys show that mature trees in a well-landscaped yard can increase the value of a house by seven to 19 percent. A study by a Michigan State professor found that across seven different states, study participants perceived that home value increased from five to 11% for homes with a good landscape.</p>
            </div>
        </div>
    )
}

export default Fact4