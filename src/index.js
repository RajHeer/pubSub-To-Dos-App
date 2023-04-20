function component() {
    const element = document.createElement('div');
  
    element.innerText = "Module loaded";
  
    return element;
  }
  
  document.body.appendChild(component());
  