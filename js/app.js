
window.addEventListener('load', () => {
    const formCreate = document.getElementById('form-create');
    const taskList = document.getElementById('task-list');
    const inputCreate = document.getElementById('create');
    const inputSearch = document.getElementById('search');

    formCreate.addEventListener('submit', (e) => {
        e.preventDefault();
        getValue();
    });

    const getValue = () => {
        console.log(inputCreate.value);
    };
});