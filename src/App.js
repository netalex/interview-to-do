/**
 * First task
 * TODO List
 * Add elements
 * ~ Apply blue color to even elements

 * Second task
 * Remove elements

 * Third task
 * Mark as complete/Incomplete

 * Fourth task
 * Add a Search box that filter elements
 */

import React from "react";
import {List} from "./components/List";
import {Inputs} from "./components/Inputs";
import {Search} from "./components/Search";

import "./styles.css";

const db = [
    {
        id: 1,
        title: "task 1"
    },
    {
        id: 2,
        title: "task 2"
    },
    {
        id: 3,
        title: "task 3"
    },
];

const cb = (event, taskn) => {
    event.preventDefault();
    console.log(event, 'cb pippo', taskn);
    console.log(db, 'piero')
};

const App = () => {

    return (
        <div className="app-container">
            <Search/>
            <Inputs onGetTask={cb}/>
            <List dta={db}/>
        </div>
    );
};

export default App;
