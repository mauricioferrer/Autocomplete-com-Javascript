const colors = [
    {
        Id: 1,
        name: 'Vermelho',
        hexColor: '#eb4034'
    },
    {
        Id: 2,
        name: 'Azul',
        hexColor: '#34d9eb'
    },
    {
        id: 3,
        name: 'Verde',
        hexColor: '#34eb4f'
    },
    {
        id: 4,
        name: 'Amarelo',
        hexColor: '#ebe534'
    }
]

const input = document.querySelector('.input-color')
const list = document.querySelector('.list-colors')

const onKeyUp = (event) => {
    const minimumChars = 1
    let selectedColors = ''
    
    if (event.target.value.length >= minimumChars) {
        colors.map((color) => {
            if (color.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
                selectedColors += `<li data-color="${color.hexColor}" data-id="${color.id}">${color.name}</li>`
            }
        })
    } else {
        list.innerHTML = ''
    }

    list.innerHTML = selectedColors

    const dataColors = document.querySelectorAll('[data-color]')

    const onClick = (event) => {
        const body = document.querySelector('body')
        body.style.backgroundColor = event.target.dataset.color
    }

    Array.from(dataColors).map((li) => {
        li.addEventListener('click', onClick)
    })

    if (list.innerHTML == '') {   //Esse if irá deixar a tela sem nenhuma cor quando todas as letras do input forem excluidas
        document.getElementsByTagName("body")[0].style.backgroundColor = "initial";
    }
}



input.addEventListener('keyup', onKeyUp)