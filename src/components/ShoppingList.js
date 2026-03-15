import React, { useState } from 'react';
import './ShoppingList.css';

export default function ShoppingList({ shoppingList, weekPlan, servings }) {
  const [checked, setChecked] = useState({});
  const [copied, setCopied] = useState(false);

  if (!weekPlan) {
    return (
      <div className="empty-state">
        <div className="empty-state-inner">
          <span className="empty-emoji">🛒</span>
          <h2 className="empty-title">No Shopping List Yet</h2>
          <p className="empty-desc">Generate your week plan first, then your full shopping list will appear here — organised by category.</p>
        </div>
      </div>
    );
  }

  const toggle = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  const totalItems = Object.values(shoppingList).flat().length;
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const formatQty = (qty) => {
    if (qty === 0) return '';
    return Number.isInteger(qty) ? `${qty}` : `${parseFloat(qty.toFixed(1))}`;
  };

  const copyToClipboard = () => {
    const text = Object.entries(shoppingList)
      .filter(([, items]) => items.length > 0)
      .map(([cat, items]) =>
        `${cat}\n${items.map(i => `  • ${formatQty(i.qty)} ${i.unit} ${i.item}`).join('\n')}`
      ).join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const clearChecked = () => setChecked({});

  const mealNames = weekPlan.flatMap(d => [d.lunch, d.dinner]).filter(Boolean).map(r => r.name);
  const uniqueMeals = [...new Set(mealNames)];

  return (
    <div className="shopping-list">
      <div className="shopping-header">
        <div>
          <h2 className="shopping-title">Shopping List</h2>
          <p className="shopping-sub">
            For {servings} {servings === 1 ? 'person' : 'people'} · {uniqueMeals.length} meals this week
          </p>
        </div>
        <div className="shopping-actions">
          <button className="copy-btn" onClick={copyToClipboard}>
            {copied ? '✓ Copied!' : '📋 Copy List'}
          </button>
          {checkedCount > 0 && (
            <button className="clear-checked-btn" onClick={clearChecked}>
              Clear ticks ({checkedCount})
            </button>
          )}
        </div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%` }}
          />
        </div>
        <span className="progress-label">{checkedCount}/{totalItems} items</span>
      </div>

      <div className="meal-summary">
        <h4 className="meal-summary-title">This week's meals:</h4>
        <div className="meal-summary-tags">
          {uniqueMeals.map(name => (
            <span key={name} className="meal-summary-tag">{name}</span>
          ))}
        </div>
      </div>

      <div className="shopping-categories">
        {Object.entries(shoppingList)
          .filter(([, items]) => items.length > 0)
          .map(([category, items]) => (
            <div key={category} className="shopping-category">
              <h3 className="category-title">{category}</h3>
              <ul className="shopping-items">
                {items.map((item, i) => {
                  const key = `${category}-${item.item}-${i}`;
                  return (
                    <li
                      key={key}
                      className={`shopping-item ${checked[key] ? 'checked' : ''}`}
                      onClick={() => toggle(key)}
                    >
                      <span className={`checkbox ${checked[key] ? 'ticked' : ''}`}>
                        {checked[key] ? '✓' : ''}
                      </span>
                      <span className="item-name">{item.item}</span>
                      <span className="item-qty">
                        {formatQty(item.qty)} {item.unit}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
      </div>

      <div className="shopping-note">
        <span>💡</span>
        <p>Quantities are combined for your full week. Items marked <em>per person</em> in recipes have been multiplied by {servings}. Always check your cupboards before shopping!</p>
      </div>
    </div>
  );
}
