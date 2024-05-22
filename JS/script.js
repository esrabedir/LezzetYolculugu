// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {

    $('a').mouseenter(
        function () {
            $(this).css({"text-decoration": "underline"});
        });

    $('a').mouseleave(
        function () {
            $(this).css({"text-decoration": "none"});
        });

});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }
  
  function displayLocationInfo(position) {
    const en = position.coords.longitude;
    const boy = position.coords.latitude;
  
    console.log(`Enlem: ${ en } | Boylam: ${ boy }`);
  }

  function updateTime() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.toLocaleString('default', { weekday: 'long' });
    const month = now.toLocaleString('default', { month: 'long' });
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}, ${month} ${dayOfMonth}, ${year}`;

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// İlk çağrıyı yap
updateTime();

// 1 saniyede bir zamanı güncelle
setInterval(updateTime, 1000);


$(document).ready(function() {
  // Bilgi kutusunu göster
  $('#showInfo').click(function() {
    $('#infoBox').removeClass('hidden');
  });

  // Bilgi kutusunu kapat
  $('#closeInfo').click(function() {
    $('#infoBox').addClass('hidden');
  });
});


var textElement = document.getElementById('myText');

// Metnin üzerine gelindiğinde rengini değiştiren fonksiyon
function changeColorOnHover() {
    // Metnin rengini rastgele bir renk olarak ayarla
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    textElement.style.color = randomColor;
}

// Metnin üzerine gelindiğinde rengini değiştir
textElement.addEventListener('mouseenter', changeColorOnHover);

// Metnin üzerinden çıkıldığında rengini eski haline getir
textElement.addEventListener('mouseleave', function() {
    textElement.style.color = 'white'; // Boş bırakarak varsayılan rengi kullan
});

if (confirm("Devam etmek istiyor musunuz?")) {
  console.log("Kullanıcı onayladı.");
} else {
  console.log("Kullanıcı reddetti.");
}

document.addEventListener("DOMContentLoaded", function() {
  var tarifEkleButton = document.getElementById("tarifEkleButton");
  var tarifAdiInput = document.getElementById("tarifAdi");

  tarifEkleButton.addEventListener("click", function() {
      var tarifAdi = tarifAdiInput.value.trim();

      if (tarifAdi === "") {
          alert("Lütfen geçerli bir tarif adı girin.");
          return;
      }

      var yeniTarif = document.createElement("li");
      yeniTarif.textContent = tarifAdi;
      yeniTarif.addEventListener("click", function() {
          if (!this.classList.contains("yapildi")) {
              this.classList.add("yapildi");
          } else {
              this.classList.remove("yapildi");
          }
      });

      document.getElementById("tarifListesi").appendChild(yeniTarif);
      tarifAdiInput.value = "";
  });
});

// HTML içerisindeki h1 etiketini seç
const heading = document.querySelector('h1');

// Sayfa yüklendiğinde giriş animasyonunu başlat
window.onload = function() {
    heading.classList.add('animate');
};

const scrollDownBtn = document.getElementById('scrollDownBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollDownBtn.classList.add('show');
    } else {
        scrollDownBtn.classList.remove('show');
    }
});

scrollDownBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.elements['name'].value;
    const comment = this.elements['comment'].value;

    if (name.trim() === '' || comment.trim() === '') {
        alert('Lütfen adınızı ve yorumunuzu girin.');
        return;
    }

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <p>${name}</p>
        <span>${comment}</span>
    `;

    commentList.appendChild(newComment);

    // Formu sıfırla
    this.reset();
});

window.onload = function() {
  checkCookieConsent();
};

function checkCookieConsent() {
  if (localStorage.getItem('cookieConsent') === 'true') {
      // Kullanıcı çerez politikasını kabul etmiş, bildirimi gizle
      document.getElementById('cookieConsent').style.display = 'none';
  } else {
      // Kullanıcı çerez politikasını henüz kabul etmemiş, bildirimi göster
      document.getElementById('cookieConsent').style.display = 'block';
  }
}

document.getElementById('closeCookieConsent').onclick = function() {
  // Kullanıcı bildirimi kapatmak istedi, çerez politikasını kabul etti olarak işaretle
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookieConsent').style.display = 'none';
};

$(document).ready(function(){
  $('.favorite').click(function(){
      $(this).toggleClass('favorited');
  });
});

$(document).ready(function(){
  $('#hoverElement').hover(
      function(){
          $(this).css('background-color', 'lightgreen');
      },
      function(){
          $(this).css('background-color', 'lightblue');
      }
  );
});

$(document).ready(function(){
  // Paneli aşağı kaydırma işlemi
  $('#kayan-panel').css('top', '50px'); // Başlangıçta yukarıda olmasını sağlar
  setTimeout(function(){
    $('#kayan-panel').css('top', '100px'); // Paneli aşağı kaydırır
      setTimeout(function(){
          $('#kayan-panel').fadeOut(500, function(){ $(this).remove(); }); // Paneli kaybolur
      }, 5000); // 5000 milisaniye (5 saniye) sonra paneli kaybolur
  }, 1000); // 1000 milisaniye (1 saniye) sonra paneli aşağı kaydırır
});

function myFunction() {
    return "Yaptığınız değişiklikleri kaydedin";
}