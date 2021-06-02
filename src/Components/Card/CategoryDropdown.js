import React, { useState } from 'react';
import './Dropdown.css';

const CategoryDropdown = ({ setNewsCategory }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('General');
    const categories = [
        'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
    ];
    return (
        <div>
            <button className='dropdown-click-btn' onClick={() => { setShowDropdown(!showDropdown) }}>{selectedCategory} {showDropdown ? (<i className="fas fa-caret-up"></i>) : (<i className="fas fa-caret-down"></i>)}</button>
            <div className='category-dropdown-menu-show'>
                {showDropdown ?
                    (
                        categories.map((category, index) => {
                            return (<button key={index} className='category-dropdown-list' onClick={() => { setSelectedCategory(category); setShowDropdown(!showDropdown); setNewsCategory(category) }} >{category}</button>)
                        })
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}

export default CategoryDropdown
