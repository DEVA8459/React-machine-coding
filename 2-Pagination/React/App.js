import React from "react";
import ReactDOM from 'react-dom/client'
import { Pagination } from "./src/pagination";

const App =()=>{
    return(
        <>
        <h1>Pagination</h1>
        <Pagination/>
        </>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)











