"use strict"

const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {

    initRatings();
}
console.log(ratings)

//main function
function initRatings() {

    let ratingActive, ratingValue;

    //бегаем по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    //  инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();
        if (rating.classList.contains('rating-set')) {
            setRating(rating);
        }
    }
    // инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating-active');
        ratingValue = rating.querySelector('.rating-value');
    }
    // изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    //возможность указать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating-item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                //обновление переменных
                initRatingVars(rating);
                //обновление активных звезд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function (e) {
                //обновление активных звезд
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function (e) {
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    //отправить на сервер
                    setRatingValue(ratingItem.value, rating);
                } else {
                    //отобразить указанную оценку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }

            })

        }
    }
}
