import React from 'react';

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  );
}

export default Header;
