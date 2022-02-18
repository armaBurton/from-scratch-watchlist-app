[Movie API](https://developers.themoviedb.org/3/search/search-movies)


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page (`'/'`), Login and Signup using the login and signup form. On success, redirect to the `/list` page  (just like in the inventory app)   |        1 |
| Logout by clicking the logout button    (just like in the inventory app)                                                    |       1 |
| If a non-logged-in user tries to visit the watchlist or search page, redirect them to the login page  (just like in the inventory app)     |      1 |
| On the watchlist page load event, fetch the watchlist items from supabase and render them to the page.   |       2 |
| On the search page, a user should be able to search for movies by title |        2 | 
| On the search page, on click of a movie item, add that movie to a supabase `watchlist_items` table |        2 |
| When a user clicks a watchlist item, it becomes watched.        |       2 |
| On the search or watchlist page, after adding to watchlist or 'watching' item, the app should refetch and rerender to live update to show the changes. |3|

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : contains and protects routes ('/', '/watchlist', '/search'), and tracks user state |1|
| `AuthPage()` : tracks user form state and allows users to sign up and sign in, storing the user in `App` state with callbacks (just like in the inventory app) |1|
| `WatchlistPage()` :  tracks `listItems` in state, and fetches them on load by calling a function `fetchItems`, which fetches the items and injects them into state |1|
| `MovieItem()` : renders items already on watchlist differently. If it is not on watchlist, on click of the item, add the item to the watchlist and refetch all items from supabase to be rerendered |1|
| `WatchlistPage()` :  tracks `movies` in state, and fetches them on load |1|
| `WatchlistItem()` : renders items already watched differently. If it is not already watched, on click of the item, set the item as `watched` in supabase and refetch all items from supabase to be rerendered. |1|
