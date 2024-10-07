//DOM manipulation

//GetElementByID()

// const title = document.getElementById('main-heading');
// console.log(title);

// //GetElementByClassName

// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// //GetElementByTagName

// const li = document.getElementsByTagName('li');
// console.log(li);

// QuerySelector()

// const container = document.querySelector('div');
// console.log(container);

//QuerySelectorAll

// const listItems = document.getElementsByClassName('div');
// console.log(listItems);

// const title = document.querySelector('li');
// console.log(title)
// title.style.color = 'red'

// var listItems = document.querySelectorAll('.list-items');

// for(i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '5rem';
// }
// console.log(listItems);

// creating element

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);

//modifying the text

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'X-men';

//Modifying Attribute and classes

// li.setAttribute('id','main-heading')
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'))

li.classList.add('list-items')
li.classList.remove('list-items')
console.log(li.classList.contains('list-items'));

//remove an element

li.remove();