function home(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('button');
    const buttonNew = document.createElement('button');

    button.textContent = 'login';
    buttonNew.textContent = 'new user';
    title.textContent = 'Inicio';
    section.append(title, button, buttonNew);
    button.addEventListener('click', () => {
        navigateTo('/login');
    });

    buttonNew.addEventListener('click', () => {
        navigateTo('/newUser');
    });

    return section;

}

export default home;