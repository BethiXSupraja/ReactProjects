# Pokedex React App - Project Overview

[🌐 Live Demo](https://your-live-demo-link.com) • [📂 GitHub Repo](https://github.com/your-repo/pokedex)

## Introduction

**Pokedex** is a modern React-based application that allows users to explore Pokémon data interactively. Utilizing **React**, **Vite.js**, and the **PokeAPI**, this app demonstrates core frontend concepts like state management, API integration, and localStorage caching for performance.

The application offers an intuitive user interface to browse Pokémon by name or number, view their stats, abilities, and types, and dive into detailed move information using modals.

---

## 🎯 Project Objective

The goal of this project is to:

- Explore API-driven development with React
- Optimize data fetch and render with local caching
- Build an interactive and responsive layout
- Apply dynamic rendering and state-controlled UI
- Strengthen knowledge of modular React components

---

## Features

### Interactive Pokémon Cards 
Display stats, types, and artwork dynamically.

### Detailed Move Descriptions
Click on moves to see full descriptions in a modal.

### LocalStorage Caching
Pokémon and move data cached to avoid redundant API calls.

### Search Functionality
Filter Pokémon by name or Pokédex number.

### Responsive Design
Mobile-friendly layout with collapsible side menu.

### Reusable Components  
Split into modular, maintainable JSX files.

---

### Project Initialization

```bash
npm create vite@latest pokedex --template react
cd pokedex
npm install
npm run dev
```

---


### Project Structure

```
pokedex/
├── dist/
├── node_modules/
├── public/
│   ├── pokemon
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   ├── PokeCard.jsx
│   │   ├── SideNav.jsx
│   │   └── TypeCard.jsx
│   ├── utils/
│   │   └── index.js
│   ├── App.jsx
│   ├── fanta.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Tech Stack

| Category     | Technology     |
|--------------|----------------|
| Frontend     | React, JSX     |
| Styling      | CSS            |
| Build Tool   | Vite.js        |
| API          | [PokeAPI](https://pokeapi.co/) |
| State Mgmt   | React Hooks    |
| Persistence  | localStorage   |

---

## Component Breakdown

| Component     | Description                                               |
|---------------|-----------------------------------------------------------|
| `App.jsx`     | Root layout managing selected Pokémon and sidebar state  |
| `SideNav.jsx` | Nav to browse and filter Pokémon                         |
| `PokeCard.jsx`| Displays Pokémon info and opens move modal               |
| `Header.jsx`  | Header with toggle button for side menu                  |
| `Modal.jsx`   | Reusable modal using `ReactDOM.createPortal()`           |
| `TypeCard.jsx`| Displays Pokémon type with color                         |
| `utils/`      | Functions for formatting numbers, types, pokémon names   |

---

### React Hooks Used

**useState**  
```js
const [selectedPokemon, setSelectedPokemon] = useState(0);
const [showSideMenu, setShowSideMenu] = useState(true);
const [data, setData] = useState(null);
const [skill, setSkill] = useState(null);
const [searchValue, setSearchValue] = useState("");
```
- Manages selected Pokémon, API data, modal state, search filter, nav toggle.

**useEffect**  
```js
useEffect(() => {
  if (loading || !localStorage) return;

  if (selectedPokemon in cache) {
    setData(cache[selectedPokemon]);
    return;
  }

  // fetch from API and update cache
}, [selectedPokemon]);
```
- Auto-fetches data when Pokémon changes or retrieves it from cache.

---

### LocalStorage (Data Persistence)

- Caches Pokémon data (`pokedex`)
- Caches move detail data (`pokemon-moves`)
- Reduces API calls, improves performance on revisit

---

### App.jsx

**Purpose:**  
Main app layout that controls routing and core app state.

**Key Concepts:**
- Passes `selectedPokemon` to children
- Toggles visibility of sidebar

---

### SideNav.jsx

**Purpose:**  
Side navigation to select and search Pokémon.

**Key Concepts:**
- Real-time search filtering
- Dynamically highlights active Pokémon

---

### Header.jsx

**Purpose:**
Displays the app name and hamburger menu button.

**Key Concepts:**
* Simple header component
* Toggles nav menu on small screens

---

### PokeCard.jsx

**Purpose:**
Displays the selected Pokémon with:
* Name, types, stats, images
* Moves (which can open a modal with descriptions)

**Key Concepts:**
* Loads data from API or cache
* Loads move details in modal
* Renders type cards and stats


---

### Modal.jsx

**Purpose:**  
Handles display of detailed move information.

**Key Concepts:**
- Uses `createPortal` for modal rendering
- Reusable for any detail component

---

### TypeCard.jsx

**Purpose:**  
Displays a colored label for Pokémon types (fire, water, etc.).

**Key Concepts:**
- Maps type to color from utility
- Used in `PokeCard.jsx`

---

### Utils (index.js)

**Functions:**
- `getPokedexNumber(index)` → Converts to integer ID
- `getFullPokedexNumber(index)` → Pads to 3 digits ("007")
- `first151Pokemon[]` → Pokémon names list
- `pokemonTypeColors{}` → Style config per type

---

## Conclusion

The **Pokedex React App** provides a clean, interactive interface for browsing Pokémon data, built with modern development practices. From performance optimizations like local caching to reusable modals and responsive UI, it exemplifies core React concepts in action.

### Key Learnings

1. **Component Architecture**  
   - Split app logic into clean, focused components.
2. **Hooks & Side Effects**  
   - Efficient state updates with `useState` & `useEffect`
3. **Persistent Caching**  
   - Improved UX by reducing redundant network calls.
4. **Modal Portals**  
   - Integrated reusable modals using React Portals.
5. **Data-Driven UI**  
   - Created dynamic components based on API data.

---

## Future Enhancements

- Pagination or lazy loading for more than 151 Pokémon
- Search by Pokémon type
- Integration of evolution chain info
- Dark mode toggle
- Unit test coverage with Jest/RTL

---

## Obstacles & Challenges

- Debouncing the search input for better performance
- Handling API edge cases with missing data
- Modal stacking and overlay rendering
- Preventing excessive re-renders on list filtering
