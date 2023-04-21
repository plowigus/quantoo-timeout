const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next ',
        prevEl: '.swiper-button-prev',
      },
    // If we need pagination
   
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides:true
        },
        
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    

  });

console.log(swiper.navigation)

  const nextButton2 = document.querySelector('.swiper-button-next-1');
  const prevButton2 = document.querySelector('.swiper-button-prev-1');
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  nextButton2.addEventListener('click', () => {
    nextButton.click();
  });

  prevButton2.addEventListener('click', () => {
    prevButton.click();
  });



  $.ajax({
    url: 'https://quantoo.pl/jobs/api/swiper/list.json',
    dataType: 'json',
    success: function(data) {
      // Handle the JSON data
      console.log(data.items);

      $(data.items).each(function(index, el){
        console.log(el)
           console.log(el.img)
         
        $('.swiper-wrapper').append(`<div class="swiper-slide"><div class="card"><img src="${el.img}" class="img-card" alt="photo"><div class="d-flex justify-content-start card-body flex-column h-100"><p>${el.id}. ${el.name}</p><p style="font-size:12px">${el.lead}</p> <div class="d-flex align-items-end h-100 w-100"><a class="btn btn-primary w-100">Read more<a></div> <div></div></div>`)
          
      })

    },
    error: function() {
      // Handle any errors
      console.log('Error: Could not retrieve JSON data.');
    }
  });