import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './components/thankyou';
// import Form from './components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
        {/* <Route path="/form" element={<Form />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
