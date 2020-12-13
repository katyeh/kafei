import React, { useState, useEffect } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Toggle from "react-toggle";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      // remember our current dark mode status in the browser local storage
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return document.body.classList.add('dark-mode');
  })
  return (
    <Toggle
      className="DarkToggle"
      defaultChecked={true}
      checked={themeState}
      onChange={handleChange}
      icons={false}
      arial-label="Dark mode"
    />
    // <div>
    //   <button onClick={handleChange}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
    // </div>
  )
}

export default ThemeChanger;
