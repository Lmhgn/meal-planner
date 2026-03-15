import React from 'react';
import './FilterPanel.css';

export default function FilterPanel({
  filters, setFilters, categories,
  ingredientText, setIngredientText,
  servings, setServings,
  onGenerate
}) {
  const toggleFilter = (id) => {
    setFilters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const clearAll = () => {
    setFilters({});
    setIngredientText('');
    setServings(2);
  };

  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="filter-panel">
      <div className="filter-section">
        <div className="filter-section-header">
          <h3 className="filter-section-title">Cooking For</h3>
        </div>
        <div className="servings-control">
          <button
            className="servings-btn"
            onClick={() => setServings(s => Math.max(1, s - 1))}
            aria-label="Decrease servings"
          >−</button>
          <div className="servings-display">
            <span className="servings-num">{servings}</span>
            <span className="servings-label">{servings === 1 ? 'person' : 'people'}</span>
          </div>
          <button
            className="servings-btn"
            onClick={() => setServings(s => Math.min(10, s + 1))}
            aria-label="Increase servings"
          >+</button>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-header">
          <h3 className="filter-section-title">What's in Your Fridge?</h3>
        </div>
        <textarea
          className="ingredient-input"
          placeholder="e.g. chicken, spinach, pasta..."
          value={ingredientText}
          onChange={e => setIngredientText(e.target.value)}
          rows={3}
        />
        {ingredientText && (
          <p className="ingredient-hint">
            Showing recipes that use: <strong>{ingredientText.split(',').map(s => s.trim()).filter(Boolean).join(', ')}</strong>
          </p>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-section-header">
          <h3 className="filter-section-title">Dietary & Style</h3>
          {activeCount > 0 && (
            <button className="clear-btn" onClick={() => setFilters({})}>
              Clear ({activeCount})
            </button>
          )}
        </div>
        <div className="filter-grid">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-chip ${filters[cat.id] ? 'active' : ''}`}
              onClick={() => toggleFilter(cat.id)}
              title={cat.description}
            >
              <span className="chip-icon">{cat.icon}</span>
              <span className="chip-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-actions">
        <button className="generate-btn" onClick={onGenerate}>
          <span>✨</span> Generate My Week
        </button>
        {(activeCount > 0 || ingredientText) && (
          <button className="clear-all-btn" onClick={clearAll}>Reset all filters</button>
        )}
      </div>

      <div className="filter-tip">
        <span className="tip-icon">💡</span>
        <p>Mix filters to discover perfectly matched meals. <strong>Batch Cook</strong> recipes are great for prepping on Sunday!</p>
      </div>
    </div>
  );
}
