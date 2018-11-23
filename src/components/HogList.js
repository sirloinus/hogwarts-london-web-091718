// functional & container component

import React from 'react'
import Hog from './Hog'

const HogList = props => {
    const { hogs, toggleDetails, hogGifs } = props
    // let counter = 0
    return (
        <div className='ui grid container'>
            {hogs.map(hog => <Hog hog={hog} toggleDetails={toggleDetails} hogGifs={hogGifs}/> )}
        </div>
    )
}

export default HogList