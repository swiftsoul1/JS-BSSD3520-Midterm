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
        console.log("we are checking");
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
    //wouldve been more difficult to hard code each skill
    //skills should probably be an array but thered be no way to 
    //identify the index in currect structure
    getSkill(name) {
        switch(name){
            case 'Strength':
                return this.strength;
            case 'Constitution':
                return this.constiution;
            case 'Dexterity':
                return this.dexterity;
            case 'Intelligence':
                return this.intelligence;
            case 'Wisdom':
                return this.wisdom;
            case 'Charisma':
                return this.charisma;
            default:
                return "error geting" + name;       
        }
    },
    setSkill(name, value) {
        switch(name){
            case 'Strength':
                this.strength = value;
                this.checkFilled();
                break;
            case 'Constitution':
                this.constitution = value;
                this.checkFilled();
                break;
            case 'Dexterity':
                this.dexterity = value;
                this.checkFilled();
                break;
            case 'Intelligence':
                this.intelligence = value;
                this.checkFilled();
                break;
            case 'Wisdom':
                this.wisdom = value;
                this.checkFilled();
                break;
            case 'Charisma':
                this.charisma = value;
                this.checkFilled();
                break;       
        }
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
    //label
    let lab = makeLabel(name);
    div.append(lab);
    //stats
    let br = document.createElement("br");
    div.append(br.cloneNode(false));
    
    let p = document.createElement('p');
        p.innerHTML = character.getName;
    div.append(p);
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
    let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('button-primary');
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
    let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('button-primary');
        submit.addEventListener('click', () => {
            if(input.value >= 3 && input.value <= 18){
                character.setSkill(name,input.value);
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
    let submit = document.createElement('button');
        submit.id = name;
        submit.innerHTML = 'submit';
        submit.classList.add('button-primary');
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

