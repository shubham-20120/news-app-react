import React, { useState } from 'react';
import './App.css';
import Data from './Components/Card/Data';
import DeveloperSection from './Components/Card/DeveloperSection';
import SearchBar from './Components/Card/Navbar';

const App = () => {
  const [searchQuery, setsearchQuery] = useState('india');
  const [newsCategory, setNewsCategory] = useState('general');
  return (
    <>
      <div className="app-main-nav-bar" style={{ backgroundColor: '#f5f5f5', height: 'auto' }}>
        <SearchBar setsearchQuery={setsearchQuery} setNewsCategory={setNewsCategory} />
      </div>
      <div className="app-main">
        <div className="app-left">
          <Data searchQuery={searchQuery} newsCategory={newsCategory} />
        </div>
        <div className="app-right">
          <DeveloperSection />
        </div>
      </div>
      <div className="developer-section-inApp-mobile">
        <DeveloperSection />
      </div>
    </>
  )
}

export default App
