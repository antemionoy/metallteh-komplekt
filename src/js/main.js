//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js

"use strict";


function yaMap() {

    if ($('#map').length) {

        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [59.972685, 30.312113],
                zoom: 13,
                controls: ['zoomControl'],
                behaviors: ['drag']
            });

            var myPlacemark = new ymaps.Placemark([59.972685, 30.312113], {
                hintContent: 'СПБ',
                balloonContentHeader: 'улица Профессора Попова, 23М',
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/marker.png',
                iconImageSize: [32, 32]
            });

            myMap.geoObjects.add(myPlacemark);

        }

    }

}

function files() {

    (function(document, window, index) {
        var inputs = document.querySelectorAll('.inputfile');
        Array.prototype.forEach.call(inputs, function(input) {
            var label = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener('change', function(e) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    label.querySelector('span').innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            input.addEventListener('focus', function() { input.classList.add('has-focus'); });
            input.addEventListener('blur', function() { input.classList.remove('has-focus'); });
        });
    }(document, window, 0));
}




$(function() {

    yaMap();
    files();

    $('.promo__carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 8000,
        smartSpeed: 9000,
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 1
            },

            1023: {
                items: 1
            }
        }
    });


    $('.card-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dotsContainer: ".card-slider__dots",
        autoplay: true,
        dots: true,
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 1
            },

            1023: {
                items: 1
            }
        }
    });


});