import React from 'react';
import './FavouritesPanel.css';

export default function FavouritesPanel({ favourites, onSelectRecipe, onFavourite, isFavourite }) {
  if (favourites.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-inner">
          <span className="empty-emoji">♡</span>
          <h2 className="empty-title">No Favourites Yet</h2>
          <p className="empty-desc">
            Hit the <strong>♡</strong> button on any recipe card or in the recipe detail view to save your favourites. They'll be stored right here for next time.
          </p>
        </div>
      </div>
    );
  }

  const lunches = favourites.filter(r => r.meal === 'lunch');
  const dinners = favourites.filter(r => r.meal === 'dinner');

  return (
    <div className="favourites-panel">
      <div className="fav-header">
        <h2 className="fav-title">Your Favourites</h2>
        <p className="fav-sub">{favourites.length} saved recipe{favourites.length !== 1 ? 's' : ''} · Stored locally in your browser</p>
      </div>

      {lunches.length > 0 && (
        <section className="fav-section">
          <h3 className="fav-section-title">☀️ Lunches</h3>
          <div className="fav-grid">
            {lunches.map(recipe => (
              <FavCard
                key={recipe.id}
                recipe={recipe}
                onSelect={() => onSelectRecipe(recipe)}
                onRemove={() => onFavourite(recipe)}
              />
            ))}
          </div>
        </section>
      )}

      {dinners.length > 0 && (
        <section className="fav-section">
          <h3 className="fav-section-title">🌙 Dinners</h3>
          <div className="fav-grid">
            {dinners.map(recipe => (
              <FavCard
                key={recipe.id}
                recipe={recipe}
                onSelect={() => onSelectRecipe(recipe)}
                onRemove={() => onFavourite(recipe)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function FavCard({ recipe, onSelect, onRemove }) {
  return (
    <div className="fav-card" onClick={onSelect}>
      <div className="fav-card-emoji">{recipe.image}</div>
      <div className="fav-card-body">
        <h4 className="fav-card-title">{recipe.name}</h4>
        <p className="fav-card-source">{recipe.source}</p>
        <div className="fav-card-meta">
          <span>⏱ {recipe.prepTime + recipe.cookTime}m</span>
          <span>🔥 {recipe.nutrition.calories} kcal</span>
          <span>💪 {recipe.nutrition.protein}g protein</span>
        </div>
      </div>
      <button
        className="fav-remove-btn"
        onClick={e => { e.stopPropagation(); onRemove(); }}
        title="Remove from favourites"
      >
        ♥
      </button>
    </div>
  );
}
