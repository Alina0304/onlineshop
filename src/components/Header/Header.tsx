import React from 'react'
export const Header: React.FC = ()=>{

    return (
        <>
            <header className="site-header">
                <div className="wrapper site-header__wrapper">
                    <a href="#" className="brand">JV Brand</a>
                    <form className='search' id='#search'>
                        <input type="text" placeholder="Искать здесь..." id='#search_input'/>
                        <button type="submit" id='#search_button'><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 32 32" width="32px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                    </form>
                    <nav className="nav">
                        <ul className="nav__wrapper">
                            <li className="nav__item"><a href="#">Home</a></li>
                            <li className="nav__item"><a href="#">About</a></li>
                            <li className="nav__item"><a href="#">Services</a></li>
                            <li className="nav__item"><a href="#">Hire us</a></li>
                            <li className="nav__item"><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            </>
    )
}