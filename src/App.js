import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
