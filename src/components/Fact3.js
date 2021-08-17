import React from 'react'
import lowerStress from '../lowerStress.jpg'

const Fact3 = (props) => {

    return (
        <div id="objects">
            <div id="picCont">
                <img id="pic" src={lowerStress} alt="eternal trees" />
            </div>
            <div id="cont3" className="container">
                <h4 id="f3">Trees can help to reduce stress</h4>
                <p id="p3">Research suggests that being around trees is good for our mental and social well-being. A study conducted by the University of Illinois and the University of Hong Kong found that the denser the forest, the lower the stress, which suggests that taking a walk down a tree-lined street could prove beneficial to your mental wellbeing. Research also suggests that nature experiences help us to feel kinder toward others. This is partly because they release chemicals called phytoncides. When we breathe them in, it can reduce blood pressure, lower anxiety levels, and increase pain threshold.</p>
            </div>
        </div>
    )
}

export default Fact3