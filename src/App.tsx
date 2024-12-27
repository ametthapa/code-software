import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AddPrefixSuffix from './features/PrefixSuffix/AddPrefixSuffix';
import JSONViewer from './features/JsonViewer/JsonViewer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-prefix-suffix" element={<AddPrefixSuffix />} />
                <Route path="/json-formatter" element={<JSONViewer />} />
            </Routes>
        </Router>
    );
}

export default App;
