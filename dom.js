//Traversing The Dom
var itemlist = document.querySelector('#items');
//ParentNode Property
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "green";
// console.log(itemlist.parentNode.parentNode.parentNode);

//ParentElement Property
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "red";
// console.log(itemlist.parentElement.parentElement);


//childNodes Property
// console.log(itemlist.childNodes);

//children property
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].computedStyleMap.backgroundColor = 'Yellow';

//FirstChild Property
// console.log(itemlist.firstChild);

//FirstElement Child property
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='Hello 1';

//Last Child property
//console.log(itemlist.lastChild);

//LastElement Child property
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='Hello 4';

//nextSibling property
// console.log(itemlist.nextSibling);

//nextElement Sibling property
// console.log(itemlist.nextElementSibling);

// previousSibling property
// console.log(itemlist.previousSibling);

//previouElementSibling property
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color = 'green';

//Create Element
// let newDiv = document.createElement('div');

//Addclass
// newDiv.className = 'hello';

//AddId
// newDiv.id = 'myId';

//Set attribute
// newDiv.setAttribute("title", 'hello div');

//create text node
// let newDivText = document.createTextNode('Hello World');

//Append Child
// newDiv.appendChild(newDivText);

// var contaner = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// contaner.insertBefore(newDiv, h1);



//Adding Hello world before Item Lister
let HelloDiv = document.createElement('div');
HelloDiv.className = 'hello';
HelloDiv.id = 'myId';
let newDivText = document.createTextNode('Hello World');
HelloDiv.appendChild(newDivText);
var contaner = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
HelloDiv.style.fontSize = '30px';
contaner.insertBefore(HelloDiv, h1);

//Adding Hello World before Item 1
let HelloDiv2 = document.createElement('li');
HelloDiv2.className = "list-group-item";
let newDivText2 = document.createTextNode('Hello World');
HelloDiv2.appendChild(newDivText2);
console.log(HelloDiv2);
var contaner2 = document.querySelector('#items');
var li = document.querySelector('li');
contaner2.insertBefore(HelloDiv2, li);