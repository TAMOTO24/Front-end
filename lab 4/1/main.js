function createTable(M, N){
    let TGtable = document.createElement('table');
    for(let i = 0; i < M; i++){
        let TGtr = document.createElement('tr');
        for(let j =0; j < N; j++){
            let TGtd = document.createElement('td');
            TGtr.appendChild(TGtd);
        }
        TGtable.appendChild(TGtr);
    }
    return TGtable;
}
document.body.appendChild(createTable(2, 2))

document.body.appendChild(document.createElement('br'))

let formTag = document.createElement('form');

let div_1 = document.createElement('div');
div_1.classList.add('menuBlock')

let labelLogTag = document.createElement('label');
let inputLogTag = document.createElement('input');
labelLogTag.setAttribute("for", "login");
inputLogTag.setAttribute("for", "login");
labelLogTag.textContent = 'Логін: ';
inputLogTag.type = "text";

div_1.appendChild(labelLogTag);
div_1.appendChild(inputLogTag);
formTag.appendChild(div_1);

let div_2 = document.createElement('div');
div_2.classList.add('menuBlock')
let labelPasswordTag = document.createElement('label');
let inputPasswordTag = document.createElement('input');
labelPasswordTag.setAttribute("for", "password");
inputPasswordTag.setAttribute("for", "password");
labelPasswordTag.textContent = 'Пароль: ';
inputPasswordTag.type = "text";

div_2.appendChild(labelPasswordTag);
div_2.appendChild(inputPasswordTag);
formTag.appendChild(div_2);

let div_3 = document.createElement('div');
div_3.classList.add('menuBlock')
let labelAnPasswordTag = document.createElement('label');
let inputAnPasswordTag = document.createElement('input');
labelAnPasswordTag.setAttribute("for", "AnPassword");
inputAnPasswordTag.setAttribute("for", "AnPassword");
labelAnPasswordTag.textContent = 'Повторіть пароль: ';
inputAnPasswordTag.type = "text";

div_3.appendChild(labelAnPasswordTag);
div_3.appendChild(inputAnPasswordTag);
formTag.appendChild(div_3);

let genderDiv = document.createElement('div');
let genderblock = document.createElement('div');
genderDiv.classList.add('menuBlock')
let labelGenderTag = document.createElement('label');
let maleTag = document.createElement('label');
let femaleTag = document.createElement('label');
let inputGenderMTag = document.createElement('input');
let inputGenderWTag = document.createElement('input');
inputGenderMTag.type = 'radio';
inputGenderWTag.type = 'radio';
maleTag.textContent = 'Чоловік';
femaleTag.textContent = 'Жінка';
labelGenderTag.textContent = 'Стать: ';

maleTag.setAttribute("for", "male");
inputGenderMTag.setAttribute("for", "male");
femaleTag.setAttribute("for", "female");
inputGenderWTag.setAttribute("for", "female");
inputGenderMTag.setAttribute('name', 'gender');
inputGenderWTag.setAttribute('name', 'gender');

genderDiv.appendChild(labelGenderTag);
genderblock.appendChild(inputGenderMTag);
genderblock.appendChild(maleTag);
genderblock.appendChild(inputGenderWTag);
genderblock.appendChild(femaleTag);

genderblock.classList.add("SecBlock")

genderDiv.appendChild(genderblock);
formTag.appendChild(genderDiv);

formTag.appendChild(document.createElement('br'));

let blockTag = document.createElement('div');
let textTag = document.createElement('p');
let listTag = document.createElement('select');

blockTag.classList.add('menuBlock');

let optionFirstTag = document.createElement('option');
let optionSecondTag = document.createElement('option');
let optionThirdTag = document.createElement('option');
optionFirstTag.textContent = 'Житомир';
optionSecondTag.textContent = "Київ";
optionThirdTag.textContent = "Львів";
optionFirstTag.setAttribute('value', '1');
optionSecondTag.setAttribute('value', '2');
optionThirdTag.setAttribute('value', '3');
listTag.setAttribute('multiple', 'multiple');
textTag.textContent = 'Вкажіть місто: ';

listTag.appendChild(optionFirstTag);
listTag.appendChild(optionSecondTag);
listTag.appendChild(optionThirdTag);
blockTag.appendChild(textTag);
blockTag.appendChild(listTag);

formTag.appendChild(blockTag);

formTag.appendChild(document.createElement('br'));


let labelChoiceTag = document.createElement('label');
let FtextTag = document.createElement('label');
let StextTag = document.createElement('label');
let TtextTag = document.createElement('label');
let FrtextTag = document.createElement('label');

let inputFirst = document.createElement('input');
let inputSecond = document.createElement('input');
let inputThird = document.createElement('input');
let inputFourth = document.createElement('input');
FtextTag.textContent = 'футбол';
StextTag.textContent = 'шахи';
TtextTag.textContent = 'малювання';
FrtextTag.textContent = 'музика';
inputFirst.type = 'checkbox';
inputSecond.type = 'checkbox';
inputThird.type = 'checkbox';
inputFourth.type = 'checkbox';


FtextTag.setAttribute('for', 'first');
inputFirst.setAttribute('for', 'first');

StextTag.setAttribute('for', 'second');
inputSecond.setAttribute('for', 'second');

TtextTag.setAttribute('for', 'third');
inputThird.setAttribute('for', 'third');

FrtextTag.setAttribute('for', 'fourth');
inputFourth.setAttribute('for', 'fourth');

labelChoiceTag.textContent = 'Інтереси: ';

formTag.appendChild(labelChoiceTag);
formTag.appendChild(inputFirst);
formTag.appendChild(FtextTag);
formTag.appendChild(inputSecond);
formTag.appendChild(StextTag);
formTag.appendChild(inputThird);
formTag.appendChild(TtextTag);
formTag.appendChild(inputFourth);
formTag.appendChild(FrtextTag);

formTag.appendChild(document.createElement('br'));

let divbtn = document.createElement('div');
let inputButtonClear = document.createElement('input');
let inputButtonSent = document.createElement('input');
divbtn.classList.add("spot")


inputButtonClear.type = 'button';
inputButtonSent.type = 'button';

inputButtonClear.value = 'Очистить';
inputButtonSent.value = 'Відправити';

divbtn.appendChild(inputButtonClear);
divbtn.appendChild(inputButtonSent);

formTag.appendChild(divbtn);

document.body.appendChild(formTag)