import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AddPrefixSuffix from './features/PrefixSuffix/AddPrefixSuffix';
import JSONViewer from './features/JsonViewer/JsonViewer';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-prefix-suffix" element={<AddPrefixSuffix />} />
                <Route path="/json-formatter" element={<JSONViewer />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
