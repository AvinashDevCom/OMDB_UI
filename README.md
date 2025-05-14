1.OMDB API has been used cause TMDB API or it websites was down

Search Functionality:
a. Title and Year is given as per it lis will be searched
b. User can click on the "Search Movie" popup will be open and "clear" & "submit" button will be there wil text field
c. Both field validation are applied when one of is filled then actions button will be enabled to do it respective action.
d.Button clear will clear field and submit will close the popup and reload the list according to search parama

Ui Details
1.Home Page
a.Has search button as described above
b. has data table with headers Id,Title, Release year & action button reload button to reload the list on present stage.
c. on the right bottom corner of the table there is pagination in table footer
in this items per page are there as per visible options.
d. according to the click of the next pagination will be towards next number and vice versa for backward if they user have not reached to end of both respectively.
e.There is APP bar which has home icon which has route to index page ('/'), on the right corner of bar watchlist icon to route to favorites Page("favorites").
f. on the watch list icon there is batch which will show count of item which liked to be in favorites.

g. On teh table there button on right hand side of each row which have '+' sign that movies need to be add in favorites and '-' for vice versa.

2. Movie Details
   this page which open when user wil click on home/favorites page table row.
   a.there are breadcrumbs on clicking on "movies" it will direct to list page .
   b.On desktop view there will be image on left side and details on the right side with cols "4" and "8" respectively.
   c.on the right side heading ,Year, rating , overview and same button which is their in the table of index in movies List.

3.Favorites Page
a. it will show the list which their the store showing Title, Release Year.
b. in it their will be button to remove that particular row or data from favorites.
c.There is search field on the top left whic search on computed the list on client side.

4. Routing and Navigation
   a.Home:-"/"
   b.Movies Details page:-"/movies/[id]"
   c.Favorites:-'/favorites'

5. Form Handling
   a.Feature: Implement a search form with multiple fields (title, year) and validation.(genre is not provided by OMDB).
   b.Behavior:
   Ensure at least one field is filled before allowing submission.
   Display user-friendly error messages for invalid submissions.

6. User Interface & Experience all page are responsive to mobile and desktop view

Technical Application

1.Nuxt3 with it's "defineAsyncComponent" "fetch" "auto Imports","useAsyncData" using store to fill content in global snack bar.
2.using composables in nuxt3, plugins.

Vue3 with it's composition API it suspense

Form Handling
a. it made sure with using defineModal declaring model
b.using emit methods to call the list Function

Typescript support implemented
in this api response has been recognized and interface are been set according to it.
each props, variable, modal, function , and computed function it type has been assign so to have less edge cases.

How use APP
a. After pulling the for github refer to file ".env.example"
b. then create .env file in root directories copy/paste the code from ".env.example"
c. then finally "npm i " followed by npm run dev
d. node shall be above 18.0v

Vuetify 3 has been utilized for to design responsive page for the application

Testing
Automated unit and integration tests have not been implemented in this submission, as the focus was on completing the core functionality and UI/UX requirements within the given timeline.
However, the codebase is structured in a way that supports future testing using tools like:
Vitest or Jest (for running tests)
Vue Test Utils (for component testing)

OMDB API Utilized
API Endpoint
Base URL: https://www.omdbapi.com/
Search Endpoint: /search/movie?apikey={your_api_key}&s=${title}&y=${year}&page=${page}
 Movie Details: /movie/{movie_id}?apikey={your_api_key}&i=${moviesId}

example

{
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
