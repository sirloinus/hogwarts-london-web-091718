// functional component

import React from 'react'

const FilterHogs = props => {
    const { toggleFilter, filterGreasedHogs} = props
    return (
        <div>
            <button onClick={toggleFilter} className='ui primary button' role='button'>
                {filterGreasedHogs === false ? 'Just Greasy Hogs' : 'All Hogs'}
            </button>
        </div>
    )
}

export default FilterHogs

