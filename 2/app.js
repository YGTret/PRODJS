document.addEventListener('DOMContentLoaded', () => {
    const initialData = [
        {
            product: "Apple iPhone 13",
            reviews: [
                { id: "1", text: "Отличный телефон! Батарея держится долго." },
                { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
            ],
        },
        {
            product: "Samsung Galaxy Z Fold 3",
            reviews: [
                { id: "3", text: "Интересный дизайн, но дорогой." },
            ],
        },
        {
            product: "Sony PlayStation 5",
            reviews: [
                { id: "4", text: "Люблю играть на PS5, графика на высоте." },
            ],
        },
    ];

    const reviewInput = document.getElementById('review-input');
    const submitButton = document.getElementById('submit-review');
    const reviewsContainer = document.getElementById('reviews-container');

    // Функция для отображения отзывов
    function displayReviews(reviews) {
        reviewsContainer.innerHTML = ''; // Очищаем контейнер
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.textContent = review.text;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Изначально отображаем отзывы из initialData
    const allReviews = initialData.flatMap(product => product.reviews);
    displayReviews(allReviews);

    // Функция для добавления отзыва
    function addReview(text) {
        if (text.length < 50 || text.length > 500) {
            throw new Error('Отзыв должен содержать от 50 до 500 символов.');
        }
        return { id: Date.now().toString(), text };
    }

    // Обработчик события для кнопки отправки отзыва
    submitButton.addEventListener('click', () => {
        const reviewText = reviewInput.value.trim();
        try {
            const newReview = addReview(reviewText);
            allReviews.push(newReview);
            displayReviews(allReviews);
            reviewInput.value = ''; // Очищаем текстовое поле после отправки
        } catch (error) {
            alert(error.message); // Показываем сообщение об ошибке
        }
    });
});
