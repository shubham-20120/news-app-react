import React, { useState } from 'react';
import CategoryDropdown from './CategoryDropdown.js';
import './Navbar.css'
const SearchBar = ({ setsearchQuery, setNewsCategory }) => {
    const [searchData, setSearchData] = useState('');
    const [dropDownValue, setDropDownValue] = useState('general');
    // const [newsCategoryNavbar, setNewsCategoryNavbar] = useState('india');
    const onClickNavbarBtn = () => {
        setsearchQuery(searchData);
        setSearchData('');
    };
    const onKeyPressInput = (e) => {
        if (e.key == 'Enter') {
            onClickNavbarBtn();
        }
    }
    // const defaultOption = options[0];
    return (
        <div className='navbar-main'>
            <div className="navbar-left">pNews</div>
            <div className="navbar-right">
                <input className='navbar-input' type="text" placeholder='search news' value={searchData} onChange={(e) => { setSearchData(e.target.value) }} onKeyPress={(e) => onKeyPressInput(e)}></input>
                <button className='navbar-input-btn' onClick={onClickNavbarBtn} >Submit</button>
                <CategoryDropdown setNewsCategory={setNewsCategory} />
            </div>
        </div>
    )
}

export default SearchBar;