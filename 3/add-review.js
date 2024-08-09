document.addEventListener('DOMContentLoaded', () => {
    const productNameInput = document.getElementById('product-name');
    const reviewTextArea = document.getElementById('review-text');
    const addReviewButton = document.getElementById('add-review-button');
    const message = document.getElementById('message');

    function saveReview(productName, reviewText) {
        // Проверяем наличие отзывов в LocalStorage
        let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (!reviews[productName]) {
            reviews[productName] = [];
        }

        // Добавляем новый отзыв
        reviews[productName].push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    addReviewButton.addEventListener('click', () => {
        const productName = productNameInput.value.trim();
        const reviewText = reviewTextArea.value.trim();
        
        if (productName && reviewText) {
            try {
                saveReview(productName, reviewText);
                productNameInput.value = '';
                reviewTextArea.value = '';
                message.textContent = 'Отзыв добавлен успешно!';
            } catch (error) {
                message.textContent = `Ошибка: ${error.message}`;
            }
        } else {
            message.textContent = 'Пожалуйста, заполните все поля.';
        }
    });
});
