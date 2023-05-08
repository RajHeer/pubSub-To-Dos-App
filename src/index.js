import "./styles.css";
import headerWithNav from "./headerWithNav";
import footer from "./footer";
import renderTasks from "./renderTasks";
import taskForm from "./taskForm";

function component() {

    const main = document.createElement("main");
    
    main.appendChild( headerWithNav() );
    main.appendChild( renderTasks() );
    main.appendChild( footer() );
    main.appendChild( taskForm() );
    
    return main;

}

document.body.appendChild(component());
