# 🎬 Movie Finder App (Nuxt 3 + Vue 3 + Vuetify 3 + OMDB API)

This project is a movie search and favorites web app built using **Nuxt 3**, **Vue 3 Composition API**, and **Vuetify 3**. It fetches data from the **OMDB API** and allows users to search movies by title and year, view detailed information, and manage a favorites list.

---

## 🚀 Features

### 1. Movie Search
- Powered by OMDB API due to TMDB being temporarily unavailable.
- Search popup allows filtering by **title** and **year**.
- Validations ensure at least one field is filled.
- Includes **Clear** and **Submit** buttons.

### 2. UI Overview

#### 🏠 Home Page (`/`)
- Search button opens movie search modal.
- Data table displays:
  - `Id`, `Title`, `Release Year`, and an action column.
- Pagination supported at the bottom-right of the table.
- Reload button to refresh the current list.
- **App Bar**:
  - Home icon routes to `/`.
  - Watchlist icon routes to `/favorites` with a badge showing favorite count.
- Table action buttons:
  - `+` to add to favorites.
  - `-` to remove from favorites.

#### 🎞 Movie Details Page (`/movies/[id]`)
- Breadcrumb for navigation (`Movies > Detail`).
- Responsive layout:
  - Left: Movie poster (4 columns).
  - Right: Title, Year, Rating, Overview, and favorites action button (8 columns).

#### ⭐ Favorites Page (`/favorites`)
- Displays list of favorited movies with title and release year.
- Each row includes a remove button.
- Search input (client-side filtering).

---

## 🔁 Routing and Navigation

| Page          | Path               |
|---------------|--------------------|
| Home          | `/`                |
| Movie Details | `/movies/[id]`     |
| Favorites     | `/favorites`       |

---

## 🧩 Form Handling

- Fields: `title`, `year` (genre not supported by OMDB).
- Validations:
  - At least one field required.
  - Button disabled until condition met.
  - Clear resets fields, Submit triggers API fetch.

---

## 📱 User Interface & Experience

- Fully responsive across mobile and desktop.
- Built with **Vuetify 3** for modern design and grid system.

---

## ⚙️ Technical Stack

- **Nuxt 3** with:
  - `defineAsyncComponent`
  - `useAsyncData`
  - Auto Imports
- **Vue 3 Composition API** and Suspense
- **Composables** for modular logic
- **Plugins** for reusable functionality
- **Pinia Store** used for global snackbars and favorite tracking
- **TypeScript** used throughout:
  - Typed API responses and interfaces
  - Strong typing for props, emits, computed, etc.

---

## 🧪 Testing

Automated tests have **not been implemented** in this submission due to project timeline constraints.

However, the codebase is structured for easy future integration using:
- **Vitest** or **Jest** for unit/integration testing
- **Vue Test Utils** for component testing

---

## 🔌 OMDB API

### 🔗 Base URL



OMDB API Utilized
API Endpoint
--
Base URL: https://www.omdbapi.com/
--

Search Endpoint: /search/movie?apikey={your_api_key}&s=${title}&y=${year}&page=${page}


--
 Movie Details: /movie/{movie_id}?apikey={your_api_key}&i=${moviesId}
--
example

{
   --
"Search": [

{

"Title": "The Matrix",

"Year": "1999",

"imdbID": "tt0133093",

"Type": "movie",

"Poster": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg"

},],

"totalResults": "101",

"Response": "True"
}
