// functional & presentation component

import React from 'react'
// import Adapter from './Adapter'

const Hog = props => {
    const { hog, toggleDetails } = props
    return (
        <div className='ui eight wide column'>
            <div className='ui card' onClick={() => toggleDetails(hog)}>
                <img className='ui image' src='https://badicalindustries.files.wordpress.com/2009/04/little-big-pig-humor.jpg' />
                <div className='content'>
                    <div className='header'>{hog.name}</div>
                    <div className=''>
                    { hog.details ?
                        <div className='extra-details'>
                            <div className='description'>Speciality: {hog.specialty}</div>
                            <div className='description'>Highest Medal: {hog['highest medal achieved']}</div>
                            <div className='extra content'>{hog.greased ? 'Very greasy' : 'Not one droplet of grease on me!'}</div>
                            <div className='description'>Weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</div>
                        </div>
                        : null
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hog