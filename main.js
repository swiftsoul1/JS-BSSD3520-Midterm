'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //dnd classes
    const classes =['fighter', 'cleric', 'warlock', 'druid', 'paladin', 'sorceror', 'wizard', 'rogue'];
    //dnd races
    const races = ['gnome', 'dwarf', 'human', 'orc', 'halfling', 'elf', 'teifling'];
    
    createSelect(classes, 'classes');
    createSelect(races, 'races');
});



//attempting to use functions as 'fragments'
//select 
const createSelect = (options, name) => {
    //create classSelect input and options
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
    document.getElementById('content').append(sel);
    
    //submitclass button
    let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('button-primary');
        submit.addEventListener('click', () => {
            removeElement(name);
        });
     document.getElementById('content').append(submit);
}

const removeElement = (name) => {
    while(document.getElementById(name)) document.getElementById(name).remove(); 
}

