const morningImg = [
    'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)',
    'linear-gradient(to top, #09203f 0%, #537895 100%)',
    'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
    'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
    'linear-gradient(to top, #dfe9f3 0%, white 100%)'];

const dayImg = [
    'linear-gradient(to top, #50cc7f 0%, #f5d100 100%)',
    'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)',
    'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
    'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)']

const eveningImg = [
    'linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;',
    'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)']

const nightImg = [
    'linear-gradient(to top, #09203f 0%, #537895 100%)',
    'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
    'linear-gradient(to top, #09203f 0%, #537895 100%)',
    'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)',
    'linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)'
];

const nameInput = document.querySelector('.namein');
const nameOut = document.querySelector('.nameout');
const inputOut = document.querySelector('.inputout');
const nextSlideBtn = document.querySelector('.header__buttons-img');
const area = document.querySelector('.greeting__area')
const focusOut = document.querySelector('.focusout')

const setInput = (e) => {
    if(e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.value);
            setGreet(nameOut.textContent)
            nameInput.value = '';
            nameInput.placeholder = '';
            nameInput.blur();
        } else {
            localStorage.setItem('name', e.target.value)
        }
    }
};

const setGreet = (text) => {
    nameOut.textContent = text;
    if (localStorage.getItem('name') === null) {
        inputOut.textContent = nameInput.value;
        
    } else {
        inputOut.textContent = localStorage.getItem('name');
        nameInput.placeholder = '';
    }
};

const  setFocus = (e) => {
    if(e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.value);
            focusOut.textContent = area.value;
            area.value = '';
            area.placeholder = '';

            area.blur()
        } else {
            localStorage.setItem('focus', e.target.value)
        }
    }
}

const getFocus = () => {
    if (localStorage.getItem('focus') === null) {
        
    } else {
        focusOut.textContent = localStorage.getItem('focus');
        area.placeholder = '';
    }
}
getFocus()


const setBg = (src) => document.body.style.background = src ;

const setGreeting = () => {
    let today = new Date();
    let hour = today.getHours();
    const getRandEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

    
    if (hour > 6 && hour < 12) {
        setGreet('Good morning');
        setBg(getRandEl(morningImg));
    } else if (hour >= 12 && hour < 18) {
        setGreet('Good afternoon');
        setBg(getRandEl(dayImg));

    } else if (hour >= 18 && hour < 24) {
        setGreet('Good evening');
        setBg(getRandEl(eveningImg));

    }
    else {
        setGreet('Good night ');
        setBg(getRandEl(nightImg));
    }
};
setGreeting();

function nextImg() {
    let today = new Date();
    let hour = today.getHours();
    const getRandEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

    if (hour > 6 && hour < 12) {
        setGreet('Good morning');
        setBg(getRandEl(morningImg));
    } else if (hour >= 12 && hour < 18) {
        setGreet('Good afternoon');
        setBg(getRandEl(dayImg));

    } else if (hour >= 18 && hour < 24) {
        setGreet('Good evening');
        setBg(getRandEl(eveningImg));

    }
    else {
        setGreet('Good night ');
        setBg(getRandEl(nightImg));
    }
}

nameInput.addEventListener('keypress', setInput);
nextSlideBtn.addEventListener('click', nextImg)
area.addEventListener('keypress', setFocus)
export default setInput;


