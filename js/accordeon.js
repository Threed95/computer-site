const accordeon = () => {
    const contents = document.querySelectorAll('.program-line__content');

    contents.forEach(item => {
        const titles = item.querySelector('.program-line__title');
        const descr = item.querySelector('.program-line__descr');

        titles.addEventListener('click', () => {

            contents.forEach(el => {
                const currentDescr = el.querySelector('.program-line__descr');
                currentDescr.classList.remove('active');
            });


            descr.classList.add('active');
        });
    });
}

accordeon();