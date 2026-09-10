const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const deleteButton = document.createElement('button');


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deleteButton);

        list.appendChild(li);
        input.value = '';
    }
    input.focus();
 });