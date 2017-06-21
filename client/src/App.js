import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Header from './Header.js'
import CoHome from './containers/CoHome.js'
import Link from './components/Link.js'
import CoQA from './containers/CoQA.js'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <div>
                        <Route exact path="/" component={CoHome} />
                        <Route path="/link" component={Link} />
                        <Route path="/qa" component={CoQA} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
