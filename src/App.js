import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';


class App extends Component {
    render() {
        return (
            <div className="component-app">
                <Router>
                    <React.Fragment>
                        <HeaderBar />
                        <Route exact path={`/`} component={Home} />
                        <Route path={`/about`} component={About} />
                        <Route path={`/topics`} component={Topics} />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default App;

/** NOTE: temporary component */

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = () => (
    <div>
        <h2>Topics</h2>
    </div>
);
