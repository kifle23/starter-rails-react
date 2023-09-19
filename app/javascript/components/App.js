import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store/store';
import Greeting from './Greeting';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Greeting />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;