import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1>My Talee</h1>
      <h2>
        <span class="material-symbols-outlined"> dashboard</span> Dashboard
      </h2>
      <h2>
        <span class="material-symbols-outlined">apps</span> Collections
      </h2>
      <h2>
        <span class="material-symbols-outlined">format_list_bulleted_add</span> New Tale
      </h2>
      <h2>
        <span class="material-symbols-outlined">import_contacts</span> Dairy
      </h2>
      <i class="fa-solid fa-chart-line"></i>
      <h2>
        <span class="material-symbols-outlined">folder_special</span> My Tales
      </h2>
    </div>
  );
}

export default Sidebar;
