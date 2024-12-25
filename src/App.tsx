import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AddPrefixSuffix from './features/PrefixSuffix/AddPrefixSuffix';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-prefix-suffix" element={<AddPrefixSuffix />} />
            </Routes>
        </Router>
    );
}

export default App;
