'use strict';

/*used this example for detecting object changes
https://www.codegrepper.com/code-examples/javascript/how+to+listen+for+variable+changes+js*/
//changed example to use my variables and to detect when all variables are filled
let character = {
    name: '',
    class: '',
    race: '',
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    checkFilled() {
        //check if the user has filled in all the fields
        if(this.name !== '' && this.class !== '' && this.race !== '' && this.strength >= 3 && this.constitution >= 3 && this.dexterity >= 3 && this.intelligence >= 3 && this.wisdom >= 3 && this.charisma >= 3){
           createDetailPage();
        }
    },
    get getName() {
        return this.name;
    },
    set setName(value) {
        this.name = value;
        this.checkFilled();
    },
    get getClass() {
        return this.class;
    },
    set setClass(value) {
        this.class = value;
        this.checkFilled();
    },
    get getRace() {
        return this.race;
    },
    set setRace(value) {
        this.race = value;
        this.checkFilled();
    },
    get getStrength() {
        return this.strength;
    },
    set setStrength(value) {
        this.strength = value;
        this.checkFilled();
    },
    get getDexterity() {
        return this.dexterity;
    },
    set setDexterity(value) {
        this.dexterity = value;
        this.checkFilled();
    },
    get getConstitution() {
        return this.constitution;
    },
    set setConstitution(value) {
        this.constitution = value;
        this.checkFilled();
    },
    get getIntelligence() {
        return this.intelligence;
    },
    set setIntelligence(value) {
        this.intelligence = value;
        this.checkFilled();
    },
    get getWisdom() {
        return this.wisdom;
    },
    set setWisdom(value) {
        this.wisdom = value;
        this.checkFilled();
    },
    get getCharisma() {
        return this.charisma;
    },
    set setCharisma(value) {
        this.charisma = value;
        this.checkFilled();
    },
   
}
/*end object*/

document.addEventListener('DOMContentLoaded', () => {
    createStartPage();
});

//attempting to use functions as 'fragments'
//start page
const createStartPage =() => {
    //dnd classes
    const classes =['fighter', 'cleric', 'warlock', 'druid', 'paladin', 'sorceror', 'wizard', 'rogue'];
    //dnd races
    const races = ['gnome', 'dwarf', 'human', 'orc', 'halfling', 'elf', 'teifling'];
    //skills
    const skills = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    createNameInput('name');
    createSelect(races, 'races');
    createSelect(classes, 'classes');
    for(let i = 0; i < skills.length; i++){
        createNumInput(skills[i]);
    }
}

//detail page
const createDetailPage = () => {
    let name = 'detail';
    //container
    let div = containerDiv(name);
    document.getElementById('content').append(div);
    
    //stats
    let div2 = containerDiv(name);
    let p = document.createElement('p');
        p.innerHTML = 'name: ' + character.getName;
    div2.append(p);
    div.append(div2)
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'race: ' + character.getRace;
    div2.append(p);
    div.append(div2);
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'class: ' + character.getClass;
    div2.append(p);
    div.append(div2);
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'strength: ' + character.getStrength;
    div2.append(p);
    div.append(div2);
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'dexterity: ' + character.getDexterity;
    div2.append(p);
    div.append(div2);
    
    div2 = containerDiv(name);
    p = document.createElement('p');
        p.innerHTML = 'constitution: ' + character.getConstitution;
    div2.append(p);
    div.append(div2)
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'intelligence: ' + character.getIntelligence;
    div2.append(p);
    div.append(div2);
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'wisdom: ' + character.getWisdom;
    div2.append(p);
    div.append(div2);
    
    div2 = containerDiv(name);
    p = document.createElement('p');
    p.innerHTML = 'charisma: ' + character.getCharisma;
    div2.append(p);
    div.append(div2);
}

//text input
const createNameInput = (name) => {
    //container
    let div = containerDiv(name);
    document.getElementById('content').append(div);
    //label
    let lab = makeLabel(name);
    div.append(lab);
     //input
    let input = document.createElement('input');
        input.type = 'text';
        input.name = name;
        input.id = name;
    div.append(input);
    //submit button
    let submit = submitBtn(name);
        submit.addEventListener('click', () => {
            console.log(input.value)
            if(input.value != ''){
                character.setName = input.value;
                removeElement(name);
            } else {
                alert("make sure u enter a value");
            }
        });
     div.append(submit);
}

//numInput for skills
const createNumInput = (name) => {
    //container
    let div = containerDiv(name);
    document.getElementById('content').append(div);
    //label
    let lab = makeLabel(name);
    div.append(lab);
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
            //roll 3 dice, as the rules dictate n add them up
            let rNum = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);  
            input.value = rNum;
        });
     div.append(roll);
    //submit button
    let submit = submitBtn(name);
        submit.addEventListener('click', () => {
            if(input.value >= 3 && input.value <= 18){
                switch(name){
                    case 'Strength':
                        character.setStrength = input.value;
                        break;
                    case 'Constitution':
                        character.setConstitution = input.value;
                        break;
                    case 'Dexterity':
                        character.setDexterity = input.value;
                        break;
                    case 'Intelligence':
                        character.setIntelligence = input.value;
                        break;
                    case 'Wisdom':
                        character.setWisdom = input.value;
                        break;
                    case 'Charisma':
                        character.setCharisma = input.value;
                        break;      
                }
                removeElement(name);
            } else {
                alert("make sure your entry is between 3-18");
            }
        });
     div.append(submit);
}

//select 
const createSelect = (options, name) => {
    //container
    let div = containerDiv(name);
    document.getElementById('content').append(div);
     //label
    let lab = makeLabel(name);
    div.append(lab);
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
    let submit = submitBtn(name);
        submit.addEventListener('click', () => {
            if(name == 'races'){
                character.setRace = sel.value;
            } else if(name == 'classes') {
                character.setClass = sel.value;
            }
            removeElement(name);
        });
     div.append(submit);
}
//submit btn
const submitBtn = (name) => {
     let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('btn');
        submit.classList.add('btn-primary');
    return submit;
}
//container div
const containerDiv = (name) => {
     //container
    let div = document.createElement('div');
        div.id = name;
        div.classList.add('row');
        div.classList.add('border');
        div.classList.add('justify-content-center');
        div.classList.add('p-5');
        div.classList.add('m-2');
    return div;
}
//label
const makeLabel = (name) => {
    let lab = document.createElement('label');
        lab.innerHTML = name;
        lab.id = name;
        lab.classList.add('p-0');
        lab.classList.add('m-0');
    return lab;
}

//removeById
const removeElement = (name) => {
    while(document.getElementById(name)) document.getElementById(name).remove(); 
}

