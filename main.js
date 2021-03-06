'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //dnd classes
    const classes =['fighter', 'cleric', 'warlock', 'druid', 'paladin', 'sorceror', 'wizard', 'rogue'];
    //dnd races
    const races = ['gnome', 'dwarf', 'human', 'orc', 'halfling', 'elf', 'teifling'];
    
    createSelect(classes, 'classes');
    createSelect(races, 'races');
    createNumInput('Strength')
});

//attempting to use functions as 'fragments'
//numInput for skills
const createNumInput = (name) => {
     //container
    let div = document.createElement('div');
        div.id = name;
        div.classList.add('row');
        div.classList.add('border');
        div.classList.add('justify-content-center');
        div.classList.add('p-5');
        div.classList.add('m-2');
    document.getElementById('content').append(div);
    //input
    let input = document.createElement('input');
        input.type = 'number';
        input.max = 18;
        input.min = 3;
        input.name = name;
        input.id = name;
    div.append(input);
    //roll button
    let roll = document.createElement('button');
        roll.id = name;
        roll.innerHTML = 'roll';
        roll.classList.add('button-primary');
        roll.addEventListener('click', () => {
            //roll 3 dice, as the rules dictate
            let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);  
            input.value = roll;
        });
     div.append(roll);
    //submit button
    let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('button-primary');
        submit.addEventListener('click', () => {
            removeElement(name);
        });
     div.append(submit);
}

//select 
const createSelect = (options, name) => {
    //container
    let div = document.createElement('div');
        div.id = name;
        div.classList.add('row');
        div.classList.add('border');
        div.classList.add('justify-content-center');
        div.classList.add('p-5');
        div.classList.add('m-2');
    document.getElementById('content').append(div);
    //select/options
    let sel = document.createElement('select');
        sel.id = name;
        sel.name = name;
    for(let i = 0;i < options.length;i++){
        //create option and add
        let option = document.createElement('option');
            option.id = options[i];
            option.value = options[i];
            option.innerHTML = options[i];
            sel.append(option);
    }
    //add select after its created
    div.append(sel);
    
    //submit button
    let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('button-primary');
        submit.addEventListener('click', () => {
            removeElement(name);
        });
     div.append(submit);
}

//removeById
const removeElement = (name) => {
    while(document.getElementById(name)) document.getElementById(name).remove(); 
}

