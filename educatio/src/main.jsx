import React from "react";
import ReactDOM from "react-dom/client";
// import {App} from "./helloadso";
import { FirsApp } from "./FirsApp";
//import { Profesor} from "./ProfesorApp";
// import { Profesor} from "./profesorMateria";
import { Avatar } from "./FirsApp";
import './style.css';


//.render(lea,ejecute los componentes)
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Avatar />
        {/* <App /> */}
        <FirsApp />
    </React.StrictMode>);


