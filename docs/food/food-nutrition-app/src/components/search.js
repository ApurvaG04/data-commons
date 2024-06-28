import React from 'react';

const Search = () => {

  // input -> text  ===> convert to fdcId for fetch ===> return dataObj ==> load to frontEnd with calculation & Label
    // input text with dropdown selection to autofill the food (E.g. milk - brand name )
    // result will show up on top of labels with "x" delete function (might consider change to check/uncheck) 
    // need to know what food has data and what are missing -> food item show up as red when fail to fetch? (Or not being able to add from search bar)
    // populate USDA labels & YAML 
    // Might consider adding charts to make it easy to read 



  const handleSearch = ( e ) => {

    return e;
    
  }


  
  
  return (

    <div class="search-container">
      {/* <input type="text" id="search-input" class="search-input" placeholder="Enter your food search term"> */}
      <button onclick="handleSearch()" class="search-button">Search</button>
    </div>
  )
}

export default Search;




// // search.js

// async function loadDataCommons_search(apiKey, keyword) {
//     const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${keyword}`;
//     const response = await fetch(url);
//     return await response.json();
// }

// async function handleSearch() {
//     var searchTerm = document.getElementById('search-input').value;
//     var link;
//     try {
//         const data = await loadDataCommons_search('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml', searchTerm);
//         const id = data.foods[0].fdcId;
//         const food_name = data.foods[0].description;
//         // console.log("Food : {}, Id : {}", food_name, id);
//         link = `/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml`;

//         // TO DO: This could be secondary. Stay in the current page to display the label.
//         window.location.href = link;
//     } catch (error) {
//         alert(error);
//     }
// }

// // Function to render the search bar
// function renderSearchBar(containerId) {
//     const container = document.getElementById(containerId);
//     container.innerHTML = `
//         <div class="search-container">
//             <input type="text" id="search-input" class="search-input" placeholder="Enter your food search term">
//             <button onclick="handleSearch()" class="search-button">Search</button>
//         </div>
//         <div>
//             <h3>Nutrition Label</h3>
//         </div>
//     `;
// }
