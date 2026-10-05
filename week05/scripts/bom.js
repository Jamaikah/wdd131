const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

 
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
    localStorage.setItem('myFAVBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFAVBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item => item !== chapter));
    setChapterList()
}

