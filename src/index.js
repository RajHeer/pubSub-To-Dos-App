import "./styles.css";
import event from "./events";
import newData from "./newData";
import headerWithNav from "./headerWithNav";
import footer from "./footer";

function component() {

    const main = document.createElement("main");
    
    main.appendChild( headerWithNav() );
    
    return main;

}
  
document.body.appendChild(component());
document.body.appendChild( footer() );

event.on("updateData", cBack);
event.trigger("updateData", "Hello World!!!");

event.on("hmmm", cBack);
event.trigger("hmmm", "Not verk");

event.on("newData", cBack2);

event.list();

function cBack(data) {
    console.log(data);
}

function cBack2(data) {
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}
