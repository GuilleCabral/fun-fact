import React from 'react'
import eternalTrees from '../eternalTrees.png'

const Fact1 = (props) => {
    
    return (
        <div id="objects">
            <div id="picCont">
                <img id="pic" src={eternalTrees} alt="eternal trees" />
            </div>
            <div id="cont1" className="container">
                <h4 id="f1">Trees are the longest living organisms on Earth, and never die of old age</h4>
                <p id="p1">California holds the record for the oldest living trees. Some of the state’s bristlecone pines and giant sequoias are 4,000-5,000 years old. Methuselah, an estimated 4,852-year-old ancient Bristlecone Pine, is one of the oldest living trees in the world.</p>
            </div>
            
        </div>
    )
}

export default Fact1