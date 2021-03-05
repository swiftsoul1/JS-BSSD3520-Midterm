'use strict';

document.addEventListener('DOMContentLoaded', () => {
    createClassesSelect();
});



const createClassesSelect = () => {
     //dnd classes
    const classes =['fighter', 'cleric', 'warlock', 'druid', 'paladin', 'sorceror', 'wizard', 'rogue'];
    //create classSelect input and options
    let classSel = document.createElement('select');
        classSel.classList.add('selectpicker');
        classSel.id = 'classes';
        classSel.name = 'classes';
    for(let i = 0;i < classes.length;i++){
        //create option and add
        let cOption = document.createElement('option');
            cOption.id = classes[i];
            cOption.value = classes[i];
            cOption.innerHTML = classes[i];
            classSel.append(cOption);
    }
    //add select after its created
    document.getElementById('content').append(classSel);    
}