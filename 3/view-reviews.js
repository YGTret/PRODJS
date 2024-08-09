document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('products-list');

    function loadReviews() {
        // Загружаем отзывы из LocalStorage
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

        // Очищаем список продуктов
        productsList.innerHTML = '';

        // Отображаем каждый продукт и его отзывы
        for (const [productName, productReviews] of Object.entries(reviews)) {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productTitle = document.createElement('h2');
            productTitle.textContent = productName;
            productDiv.appendChild(productTitle);

            productReviews.forEach((review, index) => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review';

                const reviewText = document.createElement('p');
                reviewText.textContent = review;
                reviewDiv.appendChild(reviewText);

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.textContent = 'Удалить';
                deleteButton.onclick = () => {
                    deleteReview(productName, index);
                };
                reviewDiv.appendChild(deleteButton);

                productDiv.appendChild(reviewDiv);
            });

            productsList.appendChild(productDiv);
        }
    }

    function deleteReview(productName, reviewIndex) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (reviews[productName]) {
            reviews[productName].splice(reviewIndex, 1);

            if (reviews[productName].length === 0) {
                delete reviews[productName];
            }

            localStorage.setItem('reviews', JSON.stringify(reviews));
            loadReviews();
        }
    }

    loadReviews();
});
