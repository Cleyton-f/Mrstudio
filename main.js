const menuicon = document.querySelector('.menu-icon');
const ul = document.querySelector('.ul');

menuicon.addEventListener('click', () => {

    if (ul.classList.contains('ativo')/*vai verificar se a class ul tem ativo/class,
     se nao tiver é falso, se tiver true*/) {

        //remove a class no ('')
        ul.classList.remove('ativo')

        //usa isso pra trocar uma imagem por outra
        document.querySelector('.menu-icon img').src = 'img/menu.png';

    } else {

        ul.classList.add('ativo')// adiciona a class ativo
        document.querySelector('.menu-icon img').src = 'img/close.png';

    }
})



