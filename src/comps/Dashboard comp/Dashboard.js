import React from "react";
import "./Dashboard.css";
function Dashboard() {
  const topRated=[1,2,3,4,5,6]
  return (
    <div id="dashoard">
      <div id="search_bar_div">
      <input type="text" id="search_input"></input>
      <span class="material-symbols-outlined">
search
</span>
      </div>
      
      <div id="currently_reading">
        <img
          src="https://images.unsplash.com/photo-1634893661513-d6d1f579fc63?ixlib=rb-1.2.1"
          id="currently_reading_img"
        />
        <h1>Lisa Miller's</h1>
        <h2>Annihilation</h2>
        <button>Continue Reading</button>
      </div>
      <div>
        <h1>Top Rated Tales</h1>
        <div id="tales_container">
          {topRated.map(obj=>(
            <div className="top_rated_tales">
            <img
              src="https://images.unsplash.com/photo-1560942485-b2a11cc13456"
              className="top_rated_tales_img"
            />
            <h3>The daughter of sea</h3>
            <h4>mike tyson</h4>
          </div>

          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
