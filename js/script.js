$(document).ready(function(){

    const startModal = new bootstrap.Modal('#staticBackdrop', {
        keyboard: false
    });

    startModal.show();

    let answer = [
        4,
        2,
        1,
        1,
        4,
        3,
        3,
        3,
        3,
        4
    ];
    let uanswer = [];
    $('.answer__variant').on('click', function() {
        console.log('BLA');
        let answer = $(this).data('answer');
        let question = $(this).parents('.carousel-item').data('question');
        uanswer[question - 1] = answer;
        $(this).parents('.carousel-item').find('.answer__variant').removeClass('active');
        $(this).addClass('active');
        console.log(uanswer);
    });

    $('.again').on('click', function() {
        window.location.reload();
    });
    const myCarousel = document.getElementById('carousel');

    myCarousel.addEventListener('slid.bs.carousel', event => {
        let idx = $('.carousel-item.active').data('question');
        if (idx == 1) {
            $('.btn-prev').addClass('hidden');
        } else {
            $('.btn-prev').removeClass('hidden');
        }
        if (idx == answer.length) {
            $('.btn-next').addClass('hidden');
            $('.btn-result').removeClass('hidden');
        } else {
            $('.btn-next').removeClass('hidden');
            $('.btn-result').addClass('hidden');
        }

    });

    const myModalEl = document.getElementById('exampleModal')
    myModalEl.addEventListener('shown.bs.modal', event => {
        let questions = answer.length;
        results = '';
        tanswers = 0;
        answer.forEach((el, index) => {
            console.log(el, index, uanswer[index]);
            results = results + '<div>Вопрос ' + (index + 1) + ' - ' + (!uanswer[index] ? 'нет ответа' : el == uanswer[index] ? 'верно' : 'не верно') + '</div>';
            if (el == uanswer[index]) {
                tanswers++;
            }
        });
        $('.result-questions').html(results);
        $('.result-numbers span').html(tanswers + '/' + questions);
    })
});