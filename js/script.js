
console.log('Javascript tersambung');

let indexSlide = 0;

nextSlide();

//Javascript validation form
function validateForm() {
       const username = document.getElementById('username').value;
       console.log(username);
       const email = document.getElementById('email').value;
       console.log(email);
       const option = document.getElementById('option').value;
       console.log(option);

       //Alert agar form tidak kosong
       if (username==''|| email=='') {alert('This field cannot be left blank!')};
       if (option==='') 
        {alert('Please choose one!');return false;}
        {alert('Submitted succesfully!');return true;}

    console.log('validateForm executed')
}

//Javasript banner outoslide

function nextSlide() {
    showBanner(indexSlide += 1);
}

function showBanner(n){
    const imageList = document.getElementsByClassName('banner-img');
    console.log(imageList);
    console.log(imageList.length);
    console.log(n);
    if (n > imageList.length -1) indexSlide = 0;


    //Fungsi hide semua banner
    for (let i = 0; i < imageList.length; i++) 
        {imageList[i].style.display = "none";}

    //Menampilkan satu gambar
    imageList[indexSlide].style.display = "block";
}
//Automate banner slide
setInterval(nextSlide, 3000);