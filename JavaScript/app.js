// 'use strict'
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const aside = document.querySelector('.aside');
const blurr = document.querySelector('.blur');
const accordion_content = document.querySelector('.accordion-content');
menu.addEventListener('click', function () {
    aside.classList.remove('transform');
    blurr.style.display = 'block';
})
close.addEventListener('click', function () {
    aside.classList.add('transform');
})
blurr.addEventListener('click', () => {
    aside.classList.add('transform');
    blurr.style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const item = this.parentElement;
            const icon = this.querySelector("i");

            if (item.classList.contains("active")) {
                item.classList.remove("active");
                setTimeout(() => {
                    accordion_content.style.translateY = '10px';
                }, 100)
                icon.classList.replace("ri-subtract-line", "ri-add-line");
            } else {
                document.querySelectorAll(".accordion-item").forEach(i => {
                    i.classList.remove("active");
                    i.querySelector("i").classList.replace("ri-subtract-line", "ri-add-line");
                });
                item.classList.add("active");
                icon.classList.replace("ri-add-line", "ri-subtract-line");
            }
        });
    });
});