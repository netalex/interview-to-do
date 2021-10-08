/** 
  * First task
    * TODO List
    * Add elements
    * Apply blue color to even elements

  * Second task
    * Remove elements

  * Third task
    * Mark as complete/Incomplete
    
  * Fourth task
    * Add a Search box that filter elements
 */

import React from "react";
import { List } from "./components/List";
import { Inputs } from "./components/Inputs";
import { Search } from "./components/Search";

import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Search />
      <Inputs />
      <List />
    </div>
  );
};

export default App;
