## How I implemented basic filter in react app using hooks

### Use case

From the list of restaurants I need to search specific restaurants by their name. 

### Plan

Have a input search bar and button to trigger search
Let the user enter their text in it
Display search results

### Implementation

Already had a list of restaurants.
Have a state variable to store the search text user entered, achived by calling the setSearchText method onchange of search input.
Attach an onclick handler on the search button. In handler code, filter out the restaurants which contains the search text. (case insensitive checks)
Assign the filtered restaurant into the state list variable
The UI should update the filtered list

**Note: Don't assign filtered items into original list, have a seperate list for UI, to the original data is not lost.**
