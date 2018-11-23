import React from 'react'

class Adapter {

    async getHogGifs() {
        const response = await fetch('https://api.tenor.com/v1/search?q=pig')
        const json = await response.json()
        const results = json.results
        return results.map(r => r.media[0].gif.url)
    }

}

export default Adapter