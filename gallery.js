// Initialize Swiper
const gallerySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1, // Show 1 slide by default
    spaceBetween: 30,
    loop: true, // Keep looping through slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // 5 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    // Responsive breakpoints
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// Category Filtering Logic
const categoryButtons = document.querySelectorAll('.gallery-categories-nav .category-btn');
const allSlides = document.querySelectorAll('.mySwiper .swiper-slide');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

        // Remove 'active' class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Stop autoplay, then restart after filtering
        gallerySwiper.autoplay.stop();

        // Clear existing slides from the wrapper
        gallerySwiper.removeAllSlides();

        // Add slides based on the selected category
        allSlides.forEach(slide => {
            const slideCategory = slide.dataset.category;
            if (selectedCategory === 'all' || slideCategory === selectedCategory) {
                // To re-add the exact same DOM node:
                const clonedSlide = slide.cloneNode(true); // Clone to avoid moving nodes around
                gallerySwiper.appendSlide(clonedSlide);
            }
        });

        // Update Swiper to reflect the new slides
        gallerySwiper.update();
        // Go to the first slide of the filtered set
        gallerySwiper.slideTo(0, 0); // slideTo(index, speed)
        
        // Start autoplay again
        gallerySwiper.autoplay.start();
    });
});
