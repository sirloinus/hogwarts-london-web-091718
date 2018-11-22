// functional component

import React from 'react'

const SortHogs = props => {
    const { sortName, sortWeight, toggleName, toggleWeight } = props
    return (
        <div>
            <button onClick={toggleName} className='ui primary button' role='button'>
                {sortName === false ? 'Sort by Name' : 'Unsort by Name'}
            </button>
            <button onClick={toggleWeight} className='ui primary button' role='button'>
                {sortWeight === false ? 'Sort by Weight' : 'Unsort by Weight'}
            </button>
        </div>
    )
}

export default SortHogs
