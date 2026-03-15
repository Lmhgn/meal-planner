import React, { useState, useCallback } from 'react';
import { RECIPES, CATEGORIES, DAYS, generateWeekPlan, buildShoppingList } from './data/recipes';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import WeekGrid from './components/WeekGrid';
import ShoppingList from './components/ShoppingList';
import RecipeModal from './components/RecipeModal';
import FavouritesPanel from './components/FavouritesPanel';
import './App.css';

const TABS = ['Plan', 'Shopping List', 'Favourites'];

export default function App() {
  const [activeTab, setActiveTab] = useState('Plan');
  const [filters, setFilters] = useState({});
  const [ingredientText, setIngredientText] = useState('');
  const [servings, setServings] = useState(2);
  const [weekPlan, setWeekPlan] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favourites, setFavourites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mealplanner_favs') || '[]'); }
    catch { return []; }
  });
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = useCallback(() => {
    const plan = generateWeekPlan(RECIPES, filters, ingredientText, servings);
    setWeekPlan(plan);
    setHasGenerated(true);
    setActiveTab('Plan');
  }, [filters, ingredientText, servings]);

  const handleReroll = useCallback((dayIndex, mealType) => {
    if (!weekPlan) return;
    const pool = RECIPES.filter(r => r.meal === mealType);
    const filtered = pool.filter(r => {
      const activeCategories = Object.entries(filters).filter(([, v]) => v).map(([k]) => k);
      if (activeCategories.length > 0 && !activeCategories.some(cat => r.category.includes(cat))) return false;
      return true;
    });
    const current = weekPlan[dayIndex][mealType];
    const candidates = filtered.filter(r => r.id !== current?.id);
    if (candidates.length === 0) return;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    setWeekPlan(prev => prev.map((d, i) => i === dayIndex ? { ...d, [mealType]: pick } : d));
  }, [weekPlan, filters]);

  const toggleFavourite = useCallback((recipe) => {
    setFavourites(prev => {
      const exists = prev.some(f => f.id === recipe.id);
      const next = exists ? prev.filter(f => f.id !== recipe.id) : [...prev, recipe];
      localStorage.setItem('mealplanner_favs', JSON.stringify(next));
      return next;
    });
  }, []);

  const isFavourite = useCallback((id) => favourites.some(f => f.id === id), [favourites]);

  const shoppingList = weekPlan ? buildShoppingList(weekPlan, servings) : null;

  return (
    <div className="app">
      <Header />

      <div className="main-layout">
        <aside className="sidebar">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            categories={CATEGORIES}
            ingredientText={ingredientText}
            setIngredientText={setIngredientText}
            servings={servings}
            setServings={setServings}
            onGenerate={handleGenerate}
          />
        </aside>

        <main className="content">
          <nav className="tabs">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'Favourites' && favourites.length > 0 && (
                  <span className="tab-badge">{favourites.length}</span>
                )}
                {tab}
              </button>
            ))}
          </nav>

          <div className="tab-content">
            {activeTab === 'Plan' && (
              <WeekGrid
                weekPlan={weekPlan}
                hasGenerated={hasGenerated}
                onReroll={handleReroll}
                onSelectRecipe={setSelectedRecipe}
                onFavourite={toggleFavourite}
                isFavourite={isFavourite}
                servings={servings}
                onGenerate={handleGenerate}
              />
            )}
            {activeTab === 'Shopping List' && (
              <ShoppingList
                shoppingList={shoppingList}
                weekPlan={weekPlan}
                servings={servings}
              />
            )}
            {activeTab === 'Favourites' && (
              <FavouritesPanel
                favourites={favourites}
                onSelectRecipe={setSelectedRecipe}
                onFavourite={toggleFavourite}
                isFavourite={isFavourite}
              />
            )}
          </div>
        </main>
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          isFavourite={isFavourite(selectedRecipe.id)}
          onFavourite={() => toggleFavourite(selectedRecipe)}
          servings={servings}
        />
      )}
    </div>
  );
}
