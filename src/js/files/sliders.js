/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.hero__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.hero__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.arrows-gray__arrow--prev',
				nextEl: '.arrows-gray__arrow--next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	// ========================================================================================================================================================
	if (document.querySelector('.gallery-parts__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.gallery-parts__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.gallery-parts__arrow--prev',
				nextEl: '.gallery-parts__arrow--next',
			},
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1130: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
	// ========================================================================================================================================================
	if (document.querySelector('.content-article__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.content-article__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.content-article__arrow--prev',
				nextEl: '.content-article__arrow--next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1130: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	// ========================================================================================================================================================
	if (document.querySelector('.gallery-article__thumbs')) {
		const thumbsSwiper = new Swiper('.gallery-article__thumbs', {
			modules: [Thumbs],
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 10,
			parallax: true,
			speed: 800,
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1099.98: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
			},
			on: {
				init: function (swiper) {
				}
			}
		});
		new Swiper('.gallery-article__slider', {
			modules: [Thumbs, Pagination],
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 800,
			pagination: {
				el: '.gallery-article__dotts',
				clickable: true,
				dynamicBullets: true
			},
			// Dotts
			on: {
				init: function (swiper) {
				}
			}
		});
	}
	// ========================================================================================================================================================
	if (document.querySelector('.interest__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.interest__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.interest__arrow--prev',
				nextEl: '.interest__arrow--next',
			},
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				449: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1140: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});