const inputValue = document.querySelector('.inputValue');
let items = document.getElementsByClassName('items')[0];

let list = [];
let indexMaker;

function listMaker(){
    // generating an spesific index for each item 
    // to dletethem as the second way of delete fuction
    // indexMaker = Math.floor(Math.random()) + (list.length);

    console.log(indexMaker);
    savings();
// elments of items are dynamically made
    let div = document.createElement('div');
    let p = document.createElement('p');
    let divSecond = document.createElement('div');
    const inputCheck = document.createElement('input');
    const button = document.createElement('button');
    const i = document.createElement('i')

// setting attributes to the Elements
    div.className = 'item';
    p.className = 'text';
    divSecond.className = 'secDiv';
    i.className = "fa-solid fa-trash";
    button.className = 'deleteButton';
    inputCheck.setAttribute('type', 'checkbox');



    // giving the value of input to the p to show
    p.innerHTML = inputValue.value;
    div.appendChild(p);

    


    
    

    
    // delete function
    i.addEventListener('click',function(){
        div.remove();
    });

    // appending elements to their paraent elemnts
    divSecond.appendChild(inputCheck);


    button.appendChild(i);
    divSecond.appendChild(button);
    

    div.appendChild(divSecond);

    items.appendChild(div);
    console.log(items);
    inputValue.value = '';
};

function savings(){
    list.push(inputValue.value);
    localStorage.setItem('listItems' ,JSON.stringify(list))
};
