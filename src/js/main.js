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


$(function() {

    yaMap();

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