import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Folder from './components/Folder';
import './App.css';
import data from './data/explorer'
import { useState } from 'react';

function App() {
  const [explorer, setExplorer] = useState(data)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Folder explorer={explorer} />} />
      </Routes>
    </Router>
  )
}

export default App
