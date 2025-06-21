\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{hyperref}
\usepackage{geometry}
\usepackage{graphicx}
\usepackage{listings}
\usepackage{xcolor}
\usepackage{longtable}

\geometry{margin=1in}
\title{Caffiend React App - Project Report}
\author{}
\date{}

\definecolor{codegray}{gray}{0.95}
\lstset{
    backgroundcolor=\color{codegray},
    basicstyle=\ttfamily\small,
    frame=single,
    breaklines=true,
    captionpos=b,
    showstringspaces=false
}

\begin{document}

\maketitle

\section*{Introduction}

\textbf{React} is a powerful JavaScript library used to build fast, interactive user interfaces. In this project, \textbf{Vite.js} is used to initialize and build the app for faster development cycles.

\textbf{Caffiend} is a caffeine tracking application that helps users monitor their coffee consumption. Built using \textbf{React}, \textbf{Firebase}, and custom utilities, the app enables authentication, entry of coffee intake data, and real-time stats on caffeine levels based on scientifically modeled half-life decay.

\section*{🎯 Project Objective}

The aim of this project is to build a real-time, data-driven caffeine tracker using modern front-end development practices:

\begin{itemize}
    \item Secure login \& authentication
    \item Component-based architecture
    \item Context API for state management
    \item Caffeine decay logic using half-life modeling
    \item Responsive design using custom CSS
\end{itemize}

\section*{Features}

\begin{itemize}
    \item \textbf{🔐 User Authentication:} Firebase Auth-based login, signup, logout.
    \item \textbf{📝 Coffee Intake Form:} Input fields for coffee type, time, quantity.
    \item \textbf{📊 Caffeine Stats:} Displays top 3 coffees, caffeine levels.
    \item \textbf{🕒 History Log:} Past entries with timestamps \& levels.
    \item \textbf{🧠 React Context API:} Global auth state via context.
    \item \textbf{⚙️ Utility Logic:} Includes caffeine calculation functions.
    \item \textbf{🎨 Custom CSS:} Styled with \texttt{fanta.css} and \texttt{index.css}.
    \item \textbf{📱 Responsive Layout:} Supports mobile/tablet/desktop.
\end{itemize}

\section*{Project Initialization}
\begin{lstlisting}[language=bash]
npm create vite@latest caffiend --template react
cd caffiend
npm install
npm run dev
\end{lstlisting}

\section*{Folder Structure}
\begin{lstlisting}
caffiend/
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
├── firebase.js
├── .env
├── index.html
├── vite.config.js
\end{lstlisting}

\section*{Tech Stack}

\begin{longtable}{|l|l|}
\hline
\textbf{Category} & \textbf{Technology} \\
\hline
Frontend & React, JSX \\
Build Tool & Vite.js \\
Styling & CSS (\texttt{fanta.css}) \\
State Management & React Context API \\
Authentication & Firebase Auth \\
Backend & Firebase Firestore \\
\hline
\end{longtable}

\section*{Component Breakdown}

\begin{longtable}{|l|p{10cm}|}
\hline
\textbf{Component} & \textbf{Description} \\
\hline
App.jsx & Root component managing state, layout, and route control. \\
Authentication.jsx & Handles login, signup, and user sessions. \\
CoffeeForm.jsx & Takes user input on coffee intake. \\
Stats.jsx & Shows caffeine levels and top drinks. \\
History.jsx & Displays entry log and caffeine decay over time. \\
Modal.jsx & Popup/modal display component. \\
Hero.jsx & Homepage content and layout. \\
Layout.jsx & Wraps content with header/footer. \\
AuthContext.jsx & React Context provider for auth data. \\
\hline
\end{longtable}

\section*{React Hooks Used}
\begin{itemize}
    \item \textbf{useState:} Manage form input, error messages, context values.
    \item \textbf{useEffect:} Load user authentication, initialize data from Firebase.
\end{itemize}

\begin{lstlisting}[language=JavaScript]
// Firebase auth listener
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);
\end{lstlisting}

\section*{Firebase Integration}

\begin{lstlisting}[language=JavaScript]
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  ...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
\end{lstlisting}

\section*{Utility Functions}

\begin{itemize}
    \item \texttt{calculateCurrentCaffeine(history)}
    \item \texttt{getCaffeineAmount(coffeeType)}
    \item \texttt{getTopThreeCoffees(history)}
    \item \texttt{timeSinceConsumption(timestamp)}
\end{itemize}

\section*{Conclusion}

The Caffiend App demonstrates practical skills in building a real-world, user-centric application with login capabilities, data visualization, and domain-based logic for caffeine tracking. It shows mastery of React, Firebase, hooks, and clean component organization.

\section*{Key Learnings}

\begin{enumerate}
    \item Use of \textbf{Context API} for authentication.
    \item Component-based UI design in React.
    \item Custom logic for scientific modeling (caffeine decay).
    \item Firebase integration for real-time backend services.
    \item Responsive UI/UX design with semantic CSS.
\end{enumerate}

\section*{Obstacles and Challenges}

\begin{itemize}
    \item Handling Firebase session expiration errors.
    \item Modeling time decay calculations in real-time.
    \item Conditional rendering based on auth state.
    \item Initial state refactoring from prop-drilling to context.
\end{itemize}

\section*{Future Enhancements}

\begin{itemize}
    \item Add support for data export (CSV).
    \item Integrate notification alerts for overuse.
    \item Graph-based caffeine visualizer.
    \item Link with wearable health APIs.
    \item Dark mode support.
\end{itemize}

\end{document}
