# ☕ Caffiend React App - Project Overview

## Introduction

**Caffiend** is a caffeine tracking application that helps users monitor their coffee consumption. Built using **React**, **Firebase**, and **custom utilities**, the app enables authentication, entry of coffee intake data, and real-time stats on caffeine levels based on scientifically modeled half-life decay.

---

## 🎯 Project Objective

The goal of this project is to explore **full-stack front-end development** and provide users with:

- Secure login & authentication
- Custom form-based caffeine tracking
- Visual representation of caffeine levels
- Context-based state sharing
- Time-based calculations using React utilities

---

## Features

 **User Authentication**  
Firebase Auth used to handle secure login, signup, logout, and session control.

**Coffee Intake Form**  
Users can add coffee type, time of intake, quantity, and other parameters.

**Caffeine Stats**  
Visual stats of current caffeine level, top 3 coffees, and decay calculation.

**History Log**  
View all coffee entries with their caffeine levels and timestamps.

**React Context API**  
Used for global authentication state management.

**Utility-Based Logic**  
Encapsulated functions to compute decay, top entries, and time since intake.

**Custom CSS Styling**  
Crafted with `fanta.css` and `index.css` for a consistent and responsive design.

**Responsive Layout**  
Optimized for mobile, tablet, and desktop devices.

---

### Project Initialization

```bash
npm create vite@latest caffiend 
cd caffiend
npm install
npm run dev
```

```
caffiend/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Authentication.jsx
│   │   ├── CoffeeForm.jsx
│   │   ├── Hero.jsx
│   │   ├── History.jsx
│   │   ├── Layout.jsx
│   │   ├── Modal.jsx
│   │   └── Stats.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── fanta.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── firebase.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Tech Stack

| Category     | Technology        |
|--------------|-------------------|
| Frontend     | React, JSX        |
| Build Tool   | Vite.js           |
| Styling      | CSS (`fanta.css`) |
| State Mgmt   | React Context     |
| Auth         | Firebase Auth     |
| Backend      | Firebase Firestore|

---

## Component Breakdown

| Component            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `App.jsx`            | Root component managing route & app state                                   |
| `Authentication.jsx` | Login/signup logic and authentication flows                                 |
| `CoffeeForm.jsx`     | Form input for coffee type, time, amount                                    |
| `Stats.jsx`          | Caffeine stats with live calculation logic                                  |
| `History.jsx`        | Entry log viewer with timestamp-based decay                                 |
| `Modal.jsx`          | Modal dialog used for confirmation or data entry                            |
| `Hero.jsx`           | Landing page UI                                                             |
| `Layout.jsx`         | Manages Header and Footer layout                                            |
| `AuthContext.jsx`    | Global authentication context using `React.createContext()`                 |

---

### App.jsx

* Root component that wraps all child routes.
* Uses Firebase Auth listener to protect private routes.
* Wraps context provider:
  ```
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
  ```

---

### React Hooks Used

**useState**  
Used to manage:
- Coffee input form fields
- User context (in `AuthContext`)
- Loading/error states

**useEffect**  
```js
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);
```
Used to:
- Listen to Firebase authentication changes
- Initialize state from database or context

---

### Firebase Integration

**firebase.js**
```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  ...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

* Used for:
  - `signInWithEmailAndPassword`
  - `createUserWithEmailAndPassword`
  - `signOut`
  - `onAuthStateChanged`

---

### AuthContext.jsx

**Purpose:**  
Provides global access to authentication state.

**Code:**
```js
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  ...
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
```

---

### Stats.jsx

* Retrieves coffee entries from context or database
* Computes caffeine level using:
```js
const halfLife = 5; // hours
const decay = Math.pow(0.5, timeElapsed / halfLife);
```
* Calls:
  - `calculateCurrentCaffeine()`
  - `getTopThreeCoffees()`

---

### Utility Functions

* `calculateCurrentCaffeine(history)`
* `getCaffeineAmount(coffeeType)`
* `getTopThreeCoffees(history)`
* `timeSinceConsumption(timestamp)`

---

## Conclusion

The **Caffiend App** highlights real-world use of modern React practices along with Firebase for user management. By separating UI, logic, and utilities, the app is scalable, reusable, and easy to maintain.

### Key Learnings

1. **Context & Auth Handling**  
   - Centralized login/logout via `AuthContext`.
2. **Form Handling & Input Validation**  
   - Required fields for time and coffee quantity.
3. **Caffeine Decay Calculation**  
   - Learned how to simulate decay based on half-life.
4. **Component-Driven Architecture**  
   - Organized layout with reusable functional components.
5. **Firebase Auth & Firestore**  
   - Integrated real-time authentication and conditional rendering.
---

## Obstacles and Challenges

1. **Firebase Re-authentication Errors**  
   - Handling expired tokens and session redirects.
2. **Time Calculation for Caffeine Decay**  
   - Precision of decay curve depending on current time.
3. **Error State Handling in Forms**  
   - Needed to provide real-time feedback on form validation.
4. **Context Refactor**  
   - Refactored from prop-drilling to context API to simplify authentication flow.

---

## Future Enhancements

- Add user-specific history with Firestore
- Graph-based caffeine decay chart
- Export caffeine logs as CSV
- Integrate wearable/health API for intake suggestions
- Notifications for overconsumption
