// state & container component 

import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterHogs from './FilterHogs'
import HogList from './HogList'
import SortHogs from './SortHogs'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [],
      filterGreasedHogs: false,
      sortName: false,
      sortWeight: false
    }
  }

  getHogs = () => {
    this.setState({ hogs })
  }

  componentDidMount() {
    this.getHogs()
  }

  toggleFilter = () => {
    const value = this.state.filterGreasedHogs === false ? true : false
    this.setState({ filterGreasedHogs: value })
  }

  getFilteredHogs = () => {
    const filteredHogs = this.state.hogs.filter(hog => hog.greased)
    return this.state.filterGreasedHogs ? filteredHogs : this.state.hogs
  }

  toggleDetails = selectedHog => {
    const hogs = [...this.state.hogs]
    const foundHog = hogs.find(hog => hog.name === selectedHog.name)
    const foundHogCopy = JSON.parse(JSON.stringify(foundHog))
    foundHogCopy.details ? foundHogCopy.details = false : foundHogCopy.details = true
    const index = hogs.indexOf(selectedHog)
    hogs[index] = foundHogCopy
    this.setState({ hogs })
  }

  sortByName = hogs => {
    return hogs.sort((a, b) => a.name.localeCompare(b.name))
  }

  sortByWeight = hogs => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return hogs.sort((a, b) => a[weight] - b[weight])
  }

  toggleName = () => {
    const value = this.state.sortName === false ? true : false
    this.setState({ sortName: value, sortWeight: !value })
  }

  toggleWeight = () => {
    const value = this.state.sortWeight === false ? true : false
    this.setState({ sortWeight: value, sortName: !value })
  }

  getFilteredAndSortedHogs = () => {
    const filteredHogs = this.state.filterGreasedHogs ? this.getFilteredHogs() : this.state.hogs.slice()

    if (this.state.sortName) {
      this.sortByName(filteredHogs)
    }

    if (this.state.sortWeight) {
      this.sortByWeight(filteredHogs)
    }

    return filteredHogs
  }

  render() {
    const { filterGreasedHogs, sortName, sortWeight } = this.state
    const { toggleFilter, toggleDetails, toggleName, toggleWeight, getFilteredAndSortedHogs } = this
    const filteredHogs = getFilteredAndSortedHogs()
    return (
      <div className="App">
          <Nav />
          <FilterHogs 
            toggleFilter={toggleFilter} 
            filterGreasedHogs={filterGreasedHogs}
          />
          <SortHogs 
            sortName={sortName} 
            sortWeight={sortWeight}
            toggleName={toggleName}
            toggleWeight={toggleWeight}
          />
          <HogList hogs={ filteredHogs } toggleDetails={ toggleDetails }/>
      </div>
    )
  }
}

export default App;
