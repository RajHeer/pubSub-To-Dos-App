import "./styles.css";
import event from "./events";
import newData from "./newData";
import headerWithNav from "./headerWithNav";
import footer from "./footer";
import renderTasks from "./renderTasks";

function component() {

    const main = document.createElement("main");
    
    main.appendChild( headerWithNav() );
    main.appendChild( renderTasks() );
    main.appendChild( footer() );
    
    return main;

}
  
document.body.appendChild(component());

event.on("updateData", cBack);
event.trigger("updateData", "Hello World!!!");

event.on("hmmm", cBack);
event.trigger("hmmm", "Not verk");

event.list();

function cBack(data) {
    console.log(data);
}


