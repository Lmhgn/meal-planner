import React from 'react';
import './WeekGrid.css';

function NutritionPill({ label, value, unit, color }) {
  return (
    <div className="nutrition-pill" style={{ '--pill-color': `var(--${color})`, '--pill-dim': `var(--${color}-dim)` }}>
      <span className="nutrition-value">{value}{unit}</span>
      <span className="nutrition-label">{label}</span>
    </div>
  );
}

function RecipeCard({ recipe, onReroll, onSelect, onFavourite, isFavourite, servings, mealType, dayIndex }) {
  if (!recipe) return (
    <div className="recipe-card empty">
      <p className="empty-label">No recipe matches your filters</p>
    </div>
  );

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <div className="card-header">
        <span className="card-emoji">{recipe.image}</span>
        <div className="card-header-actions" onClick={e => e.stopPropagation()}>
          <button
            className={`fav-btn ${isFavourite ? 'active' : ''}`}
            onClick={() => onFavourite(recipe)}
            title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            {isFavourite ? '♥' : '♡'}
          </button>
          <button
            className="reroll-btn"
            onClick={() => onReroll(dayIndex, mealType)}
            title="Get a different recipe"
          >
            🔀
          </button>
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{recipe.name}</h4>
        <p className="card-source">
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
            {recipe.source}
          </a>
        </p>
        <div className="card-tags">
          {recipe.category.slice(0, 3).map(cat => (
            <span key={cat} className={`card-tag tag-${cat}`}>
              {cat === 'vegetarian' ? '🥦 Veg' :
               cat === 'vegan' ? '🌱 Vegan' :
               cat === 'meat' ? '🥩 Meat' :
               cat === 'fish' ? '🐟 Fish' :
               cat === 'quick' ? '⚡ Quick' :
               cat === 'batchCook' ? '🫙 Batch' :
               cat === 'highProtein' ? '💪 Protein' :
               cat === 'healthy' ? '🥗 Healthy' : cat}
            </span>
          ))}
        </div>
        <div className="card-meta">
          <span className="card-time">⏱ {totalTime} min</span>
          <span className="card-cal">🔥 {recipe.nutrition.calories} kcal</span>
        </div>
        <div className="card-nutrition">
          <NutritionPill label="Protein" value={recipe.nutrition.protein} unit="g" color="green" />
          <NutritionPill label="Carbs" value={recipe.nutrition.carbs} unit="g" color="amber" />
          <NutritionPill label="Fat" value={recipe.nutrition.fat} unit="g" color="red" />
          <NutritionPill label="Fibre" value={recipe.nutrition.fibre} unit="g" color="teal" />
        </div>
      </div>
    </div>
  );
}

export default function WeekGrid({ weekPlan, hasGenerated, onReroll, onSelectRecipe, onFavourite, isFavourite, servings, onGenerate }) {
  if (!hasGenerated) {
    return (
      <div className="empty-state">
        <div className="empty-state-inner">
          <span className="empty-emoji">🍽️</span>
          <h2 className="empty-title">Let's Plan Your Week</h2>
          <p className="empty-desc">Set your dietary preferences and serving size on the left, then hit <strong>Generate My Week</strong> to get 7 days of curated lunches and dinners.</p>
          <button className="empty-cta" onClick={onGenerate}>✨ Generate My Week</button>
        </div>
      </div>
    );
  }

  return (
    <div className="week-grid">
      <div className="week-grid-header">
        <h2 className="week-grid-title">Your Week's Menu</h2>
        <p className="week-grid-sub">Click any recipe to see the full details, or hit 🔀 to swap it out.</p>
      </div>
      <div className="days-grid">
        {weekPlan.map((day, i) => (
          <div key={day.day} className="day-column">
            <div className="day-label">{day.day}</div>
            <div className="day-meals">
              <div className="meal-slot">
                <span className="meal-type-label lunch">☀️ Lunch</span>
                <RecipeCard
                  recipe={day.lunch}
                  onReroll={onReroll}
                  onSelect={onSelectRecipe}
                  onFavourite={onFavourite}
                  isFavourite={day.lunch && isFavourite(day.lunch.id)}
                  servings={servings}
                  mealType="lunch"
                  dayIndex={i}
                />
              </div>
              <div className="meal-slot">
                <span className="meal-type-label dinner">🌙 Dinner</span>
                <RecipeCard
                  recipe={day.dinner}
                  onReroll={onReroll}
                  onSelect={onSelectRecipe}
                  onFavourite={onFavourite}
                  isFavourite={day.dinner && isFavourite(day.dinner.id)}
                  servings={servings}
                  mealType="dinner"
                  dayIndex={i}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
