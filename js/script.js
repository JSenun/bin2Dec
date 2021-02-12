const btnCovert = document.querySelector('.btn');

btnCovert.addEventListener('click', () => {
    let msgErro = document.querySelector('.error')
    msgErro.classList.add('invisivel');
    let numBinario = document.getElementById('bin').value;
    if (numBinario === '') msgErro.classList.remove("invisivel");
    numBinario.split('').map((char) => {
        if (char !== '0' && char !== '1') msgErro.classList.remove("invisivel");
    });
    let numDecimal = document.getElementById('dec').value = parseInt(numBinario, 2);
})