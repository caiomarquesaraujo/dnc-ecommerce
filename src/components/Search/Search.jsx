import React from 'react'
import './index.scss'
import searchLogo from '../../assets/search.png'
import profileLogo from '../../assets/profile.png'
import favoriteLogo from '../../assets/heart.png'

function Search() {
    return (
        <div className='search'>
            <div className='search__input-container'>
                <img src={searchLogo} alt="Search Logo" className='search__search-logo' />
                <input type="text" placeholder='Search' />
            </div>
            <img src={profileLogo} alt="profile logo" className='img-out' />
            <img src={favoriteLogo} alt="favorite logo" className='img-out' />
        </div>
    )
}

export default Search