new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    lazyLoading: true,
    continuousVertical: true,
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'left',
    showActiveTooltip: true,
    afterLoad: function(){
        document.querySelector('a.active').nextElementSibling.classList.add('yeartext');
        setTimeout(function() {document.querySelector('a.active').nextElementSibling.classList.remove('yeartext');}, 600);
    }
});
var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true
      });