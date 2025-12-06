// Create rander function 

const costomRender = (element , container) => {
    /*
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);

    container.appendChild(domElement);
    */

    
    
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    for(const prop in element.props)
    {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }


    container.appendChild(domElement);
     
}


// create react element 
const reactElement = {
    type: "a",
    props: {
        href:"https://www.google.com",
        target: "_self"
    },
    children: "Click to visit google"
}
// console.log(reactElement.type)

// render react element 
const mainContainer = document.querySelector('#root');

costomRender(reactElement, mainContainer);



