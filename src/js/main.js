//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/nouislider/distribute/nouislider.min.js
//= ../../bower_components/remodal/dist/remodal.min.js
//= ../../bower_components/wnumb/wnumb.js

"use strict";

function selectFun() {

    $('.form__select').each(function() {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function() {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

}


function changeCatalogBlocks() {

    $('.filter__btn-list-js').on('click', function(e) {
        e.preventDefault();

        // $('.catalog__row').addClass('catalog__row_list');

        $('.catalog__row-lines').addClass('show');
        $('.catalog__row-blocks').removeClass('show');
        $('.catalog-menu').addClass('list');

    });


    $('.filter__btn-block-js').on('click', function(e) {
        e.preventDefault();

        // $('.catalog__row').removeClass('catalog__row_list');

        $('.catalog__row-blocks').addClass('show');
        $('.catalog__row-lines').removeClass('show');
        $('.catalog-menu').removeClass('list');

    });

}


function showFilter() {

    $('.tabs__link_filter-show-js').on('click', function(e){
        e.preventDefault();

         $('.catalog__filter').toggleClass('show');

         $(this).toggleClass('active');

    });

}



function rangeSlider(elementRange, inputOne, inputTwo) {


    var stepsSlider = document.querySelector(elementRange);
    var input0 = document.querySelector(inputOne);
    var input1 = document.querySelector(inputTwo);
    var inputs = [input0, input1];

    if (stepsSlider) {

        noUiSlider.create(stepsSlider, {
            start: [40, 160],
            connect: true,
            range: {
                'min': [0],
                'max': 200
            }
        });

        stepsSlider.noUiSlider.on('update', function(values, handle) {
            inputs[handle].value = values[handle];
        });


        inputs.forEach(function(input, handle) {

            input.addEventListener('change', function() {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function(e) {

                var values = stepsSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = stepsSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;


            });
        });
    }
}


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


function sidebarToggle() {
    if ($(window).width() <= 1023) {

        $('.hamburger').on('click', function(e) {
            e.preventDefault();

            $(this).toggleClass("is-active");
            $('.header__navigation').toggleClass('is-visible');
            $('.wrapper').toggleClass('open-sidebar');
            $('html').toggleClass('overflow');

        });

    }

}





$(function() {

    sidebarToggle();

    showFilter();

    changeCatalogBlocks();

    selectFun();

    rangeSlider('.filter__range_square-js', '.filter__value_square-0-js', '.filter__value_square-1-js');

    rangeSlider('.filter__range_price-js', '.filter__value_price-0-js', '.filter__value_price-1-js');

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
        nav: true,
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
