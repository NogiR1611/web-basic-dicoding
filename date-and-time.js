let time = new Date();
let hours = time.getHours();
let day = time.getDay();
let thisDay = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
let date = time.getDate();
let month = time.getMonth();
let thisMonth = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
let year = time.getFullYear();
            
if (hours>=00 && hours<10){
    document.getElementById("hello").innerHTML = "Selamat Pagi,Kali ini Saya akan menerangkan Konten sebuah Artikel mengenai Startup.Selamat membaca...";
}
else if(hours>=10 && hours<15){
    document.getElementById("hello").innerHTML = "Selamat Siang,Kali ini Saya akan menerangkan Konten sebuah Artikel mengenai Startup.Selamat membaca...";
}
else if(hours>=15 && hours<18){
    document.getElementById("hello").innerHTML = "Selamat Sore,Kali ini Saya akan menerangkan Konten sebuah Artikel mengenai Startup.Selamat membaca...";
}
else{
    document.getElementById("hello").innerHTML = "Selamat Malam,Kali ini Saya akan menerangkan Konten sebuah Artikel mengenai Startup.Selamat membaca...";
}

document.getElementById("year").innerHTML = year;
document.getElementById("date").innerHTML =thisDay[day]+","+date+" "+thisMonth[month]+" "+year;