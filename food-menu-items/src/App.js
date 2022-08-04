import React from 'react'
import { MenuCard } from './MenuCard'
import { MENU_TYPES, MENU_ITEMS } from './constants'
import './App.css';

function App() {
  return (
    <div className='App'>
      <MenuCard types={MENU_TYPES} menuItems={MENU_ITEMS} />
    </div>
  );
}

export default App