// functional & container component

import React from 'react'
import Hog from './Hog'

const HogList = props => {
    const { hogs, toggleDetails } = props
    return (
        <div className='ui grid container'>
            {hogs.map(hog => <Hog hog={ hog } toggleDetails={ toggleDetails } /> )}
        </div>
    )
}

export default HogList