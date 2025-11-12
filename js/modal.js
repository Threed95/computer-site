const modal = () => {
    const modalBtn = document.querySelector('.modal__button');
    const modal = document.querySelector('.modal');
    const courseBtn = document.querySelector('.course__button');
    const modalInner = document.querySelector('.modal__inner');

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';

    })

    courseBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    })

    modal.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.modal__inner');
        if (!modalContent) {
            modal.style.display = 'none';
        }
    })

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal-close__button');
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '1rem';
    closeBtn.style.right = '1rem';
    closeBtn.style.fontSize = '4rem';
    closeBtn.style.color = '#FFF';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.background = 'none';
    closeBtn.innerHTML = '&times';
    modalInner.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

modal();