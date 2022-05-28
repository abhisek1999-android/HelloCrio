function tiltJsCriO2() {
            for(var j = 0; j < document.querySelectorAll('.swiper-slide-visible').length; j++) {
                if(document.querySelectorAll('.swiper-slide-visible')[j].vanillaTilt != undefined) {
                    document.querySelectorAll('.swiper-slide-visible')[j].vanillaTilt.destroy();
                    if(document.querySelectorAll('.swiper-slide-visible')[j].classList.contains('swiper-slide-active')) {
                        VanillaTilt.init(document.querySelectorAll('.swiper-slide-visible')[j], {
                            max: 5,
                            speed: 400,
                            scale: 1.1,
                            perspective: 600,
                            glare: true,
                            "max-glare": 0.4,
                        });
                    } else if(document.querySelectorAll('.swiper-slide-visible')[j].classList.contains('swiper-slide-prev')) {
                        VanillaTilt.init(document.querySelectorAll('.swiper-slide-visible')[j], {
                            max: 5,
                            speed: 400,
                            scale: 1,
                            perspective: 600,
                            glare: true,
                            "max-glare": 0.4,
                        });
                        document.querySelectorAll('.swiper-slide-visible')[j].style.transform = "translate3d(0, 0, -180px) rotateX(0) rotateY(0) scale(1)";
                    } else if(document.querySelectorAll('.swiper-slide-visible')[j].classList.contains('swiper-slide-next')) {
                        VanillaTilt.init(document.querySelectorAll('.swiper-slide-visible')[j], {
                            max: 5,
                            speed: 400,
                            scale: 1,
                            perspective: 600,
                            glare: true,
                            "max-glare": 0.4,
                        });
                        document.querySelectorAll('.swiper-slide-visible')[j].style.transform = "translate3d(0, 0, -180px) rotateX(0) rotateY(0) scale(1)";
                    } else {
                        document.querySelectorAll('.swiper-slide-visible')[j].style.transform = "translate3d(0, 0, -360px) rotateX(0) rotateY(0) scale(1)";
                    }
                }
            }
        }
        function tiltJsCriO() {
            if(document.body.clientWidth > 768) {
            VanillaTilt.init(document.querySelectorAll('.swiper-slide-next,.swiper-slide-prev'), {
                max: 5,
                speed: 400,
                scale: 1,
                perspective: 600,
                glare: true,
                "max-glare": 0.4,
            });
            VanillaTilt.init(document.querySelectorAll('.swiper-slide-active'), {
                max: 5,
                speed: 400,
                scale: 1.1,
                perspective: 600,
                glare: true,
                "max-glare": 0.4,
            });
		}
        }
        function tiltJsCriO3() {
            setTimeout(tiltJsCriO, 1000);
        } function tiltJsCriO4() {
            setTimeout(tiltJsCriO2, 1000);
        }
        window.addEventListener('load', tiltJsCriO);
         window.addEventListener('click', tiltJsCriO2);
         window.addEventListener('click', tiltJsCriO);
        if(document.body.clientWidth > 768) {
            var swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: false,
                centeredSlides: true,
                allowTouchMove: false,
                slidesPerView: "5",
                coverflowEffect: {
                    rotate: 0,
                    stratch: 0,
                    depth: 90,
                    modifier: 2,
                    slideShadows: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                loop: true,
            });
        } else {
            var swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: false,
                centeredSlides: true,
                slidesPerView: "5",
                coverflowEffect: {
                    rotate: 0,
                    stratch: 0,
                    depth: 90,
                    modifier: 2,
                    slideShadows: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                loop: true,
            });
        }
        const classlist = ['swiper-slide-prev', 'swiper-slide-next'];
        function tranform3d(e) {
            if(e.classList.contains('swiper-slide-active')) {
                console.log("This is nothing, just exploring possibilities");
            } else if(e.classList.contains('swiper-slide-prev')) {
                setTimeout(nextprev, 100, e);
            } else if(e.classList.contains('swiper-slide-next')) {
                setTimeout(nextprev, 100, e);
            } else {
                setTimeout(nextprevlast, 100, e);
            }
        }
        function nextprev(e) {
            e.style.msTransform = "translate3d(0, 0, -180px) rotateX(0) rotateY(0) scale(1)";
            e.style.webkitTransform = "translate3d(0, 0, -180px) rotateX(0) rotateY(0) scale(1)";
            e.style.transform = "translate3d(0, 0, -180px) rotateX(0) rotateY(0) scale(1)";
        } function nextprevlast(e) {
            e.style.msTransform = "translate3d(0, 0, -360px) rotateX(0) rotateY(0) scale(1)";
            e.style.webkitTransform = "translate3d(0, 0, -360px) rotateX(0) rotateY(0) scale(1)";
            e.style.transform = "translate3d(0, 0, -360px) rotateX(0) rotateY(0) scale(1)";
        }