document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const form = document.querySelector('#feedbackForm');

if (form) {
    form.addEventListener('submit', () => {
        const type = form.querySelector('input[name="type"]:checked').value;
        const rating = form.querySelector('input[name="rating"]:checked').value;

        localStorage.setItem('submissionType', type);
        localStorage.setItem('submissionRating', rating);

        let reviewCount = getReviewCount() || 0;
        reviewCount = reviewCount + 1;
        setReviewCount(reviewCount);
    });
}

const display = document.querySelector('#reviewCount');
const response = document.querySelector('#response');

if (display && response) {
    const type = localStorage.getItem('submissionType');
    const rating = Number(localStorage.getItem('submissionRating'));
    const reviewCount = getReviewCount() || 0;

    display.textContent = reviewCount;

    const times = reviewCount === 1 ? 'time' : 'times';

    if (type === 'inquiry') {
        response.textContent =
            `Thank you for your inquiry! You have submitted feedback and inquiries ${reviewCount} ${times}.`;
    } else if (type === 'feedback') {
        response.textContent = rating >= 3
            ? `Thank you for your feedback. We appreciate it! You have submitted feedback and inquiries ${reviewCount} ${times}.`
            : `Thank you for your feedback. We'll try our best to improve our website! You have submitted feedback and inquiries ${reviewCount} ${times}.`;
    }
}

function setReviewCount(count) {
    localStorage.setItem('reviewCount', JSON.stringify(count));
}

function getReviewCount() {
    return JSON.parse(localStorage.getItem('reviewCount'));
}
