import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-icon">🍽️</span>
          <div>
            <h1 className="header-title">Meal Planner</h1>
            <p className="header-subtitle">Your personal chef & dietician</p>
          </div>
        </div>
        <div className="header-meta">
          <span className="header-badge">30 Curated Recipes</span>
          <span className="header-badge">Full Nutrition Info</span>
          <span className="header-badge">Smart Shopping List</span>
        </div>
      </div>
    </header>
  );
}
