import React from "react";
import "./DarkMode.css";
import sun from './sun.png'
import moon from './moon.png'


const DarkMode = () => {
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    };

    const setLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <img src={sun} className="sun"></img>
                <img src={moon} className="moon"></img>
            </label>
        </div>
    );
};

export default DarkMode;
