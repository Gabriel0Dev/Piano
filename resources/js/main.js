// As variáveis keys e notes armazenam as teclas do piano
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key) {
    notes.push(document.getElementById(key));
})

// Escreva funções nomeadas que alteram a cor das teclas abaixo
const keyPlay = event => {
    event.currentTarget.classList.add("active");
    //Tocar nota da tecla
    let note = document.getElementById(event.currentTarget.dataset.key);
    note.cloneNode(true).play();
}

const keyReturn = event => {
    event.currentTarget.classList.remove("active");
}

// Escreva uma função nomeada com propriedades de manipulador de eventos
const notesListener = note => {
    note.onmousedown = keyPlay
    note.onmouseup = keyReturn
    note.onmouseleave = keyReturn
}

// Escreva um loop que passa os elementos do array pela função
notes.forEach(note => {
    notesListener(note)
})

// Essas variáveis armazenam os botões que avançam o usuário pelas letras
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// Esta variável armazena o elemento de letra '-END'
let lastLyric = document.getElementById('column-optional');

// Essas instruções estão "escondendo" todos os botões de progresso, exceto o primeiro
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Escreva propriedade de manipulador de eventos anônimos e função para o primeiro botão de progresso
nextOne.addEventListener('click', () => {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    // Mudar letras das notas
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
})

// Escreva propriedade de manipulador de eventos anônimos e função para o segundo botão de progresso
nextTwo.addEventListener('click', () => {
    nextThree.hidden = false;
    nextTwo.hidden = true;
    // Mudar palavras da canção
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    // Mostrar última letra
    lastLyric.style.display = 'inline-block';
    // Mudar letras das notas
    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
})

// Escreva propriedade de manipulador de eventos anônimos e função para o terceiro botão de progresso
nextThree.addEventListener('click', () => {
    startOver.hidden = false;
    nextThree.hidden = true;
    // Mudar palavras da canção
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';
    // Mudar letras das notas
    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    // Esconder última letra
    lastLyric.style.display = 'none';
})

// Esta é a propriedade de manipulador de eventos e função para o botão startOver
startOver.onclick = function() {
    nextOne.hidden = false;
    startOver.hidden = true;
    // Mudar palavras da canção e letras das notas
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}