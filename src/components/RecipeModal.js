import React, { useEffect } from 'react';
import './RecipeModal.css';

function NutritionBar({ label, value, max, unit, color }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="nutr-row">
      <div className="nutr-row-header">
        <span className="nutr-name">{label}</span>
        <span className="nutr-value" style={{ color: `var(--${color})` }}>{value}{unit}</span>
      </div>
      <div className="nutr-bar-bg">
        <div
          className="nutr-bar-fill"
          style={{ width: `${pct}%`, background: `var(--${color})` }}
        />
      </div>
    </div>
  );
}

export default function RecipeModal({ recipe, onClose, isFavourite, onFavourite, servings }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const totalTime = recipe.prepTime + recipe.cookTime;

  const formatIngredientQty = (ing, servings) => {
    const qty = ing.perServing ? ing.qty * servings : ing.qty;
    return Number.isInteger(qty) ? qty : qty.toFixed(1).replace('.0', '');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-close" onClick={onClose} role="button" tabIndex={0} aria-label="Close">✕</div>

        <div className="modal-hero">
          <span className="modal-emoji">{recipe.image}</span>
          <div className="modal-hero-info">
            <div className="modal-meal-tag">{recipe.meal === 'lunch' ? '☀️ Lunch' : '🌙 Dinner'}</div>
            <h2 className="modal-title">{recipe.name}</h2>
            <p className="modal-source">
              Recipe inspired by{' '}
              <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">{recipe.source}</a>
            </p>
            <div className="modal-tags">
              {recipe.category.map(cat => (
                <span key={cat} className={`card-tag tag-${cat}`}>
                  {cat === 'vegetarian' ? '🥦 Vegetarian' :
                   cat === 'vegan' ? '🌱 Vegan' :
                   cat === 'meat' ? '🥩 Meat' :
                   cat === 'fish' ? '🐟 Fish' :
                   cat === 'quick' ? '⚡ Quick' :
                   cat === 'batchCook' ? '🫙 Batch Cook' :
                   cat === 'highProtein' ? '💪 High Protein' :
                   cat === 'healthy' ? '🥗 Healthy' : cat}
                </span>
              ))}
            </div>
          </div>
          <button
            className={`modal-fav-btn ${isFavourite ? 'active' : ''}`}
            onClick={onFavourite}
            title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            {isFavourite ? '♥' : '♡'}
          </button>
        </div>

        <div className="modal-stats-bar">
          <div className="modal-stat">
            <span className="stat-icon">⏱</span>
            <div>
              <div className="stat-val">{recipe.prepTime}m</div>
              <div className="stat-lbl">Prep</div>
            </div>
          </div>
          <div className="modal-stat">
            <span className="stat-icon">🍳</span>
            <div>
              <div className="stat-val">{recipe.cookTime}m</div>
              <div className="stat-lbl">Cook</div>
            </div>
          </div>
          <div className="modal-stat">
            <span className="stat-icon">🕐</span>
            <div>
              <div className="stat-val">{totalTime}m</div>
              <div className="stat-lbl">Total</div>
            </div>
          </div>
          <div className="modal-stat">
            <span className="stat-icon">🔥</span>
            <div>
              <div className="stat-val">{recipe.nutrition.calories}</div>
              <div className="stat-lbl">kcal</div>
            </div>
          </div>
          <div className="modal-stat">
            <span className="stat-icon">👥</span>
            <div>
              <div className="stat-val">{servings}</div>
              <div className="stat-lbl">Serving{servings !== 1 ? 's' : ''}</div>
            </div>
          </div>
        </div>

        <p className="modal-desc">{recipe.description}</p>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Ingredients</h3>
            <p className="modal-section-sub">Quantities for {servings} {servings === 1 ? 'person' : 'people'}</p>
            <ul className="ingredient-list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="ingredient-item">
                  <span className="ingredient-dot" />
                  <span className="ingredient-text">
                    <strong>{formatIngredientQty(ing, servings)}</strong> {ing.unit}{' '}
                    <span className="ingredient-name">{ing.item}</span>
                    {ing.perServing && <span className="per-serving-tag">per person</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Method</h3>
            <ol className="steps-list">
              {recipe.steps.map((step, i) => (
                <li key={i} className="step-item">
                  <span className="step-num">{i + 1}</span>
                  <p className="step-text">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Nutrition per Serving</h3>
            <div className="nutrition-details">
              <div className="calories-display">
                <span className="cal-num">{recipe.nutrition.calories}</span>
                <span className="cal-unit">kcal per serving</span>
              </div>
              <div className="nutr-bars">
                <NutritionBar label="Protein" value={recipe.nutrition.protein} max={60} unit="g" color="green" />
                <NutritionBar label="Carbohydrates" value={recipe.nutrition.carbs} max={100} unit="g" color="amber" />
                <NutritionBar label="Fat" value={recipe.nutrition.fat} max={60} unit="g" color="red" />
                <NutritionBar label="Fibre" value={recipe.nutrition.fibre} max={30} unit="g" color="teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
