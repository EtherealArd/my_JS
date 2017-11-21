console.log("running");
let imgs = [
    "Images/right.jpg",
    "Images/cright.jpg",
    "Images/cleft.jpg",
    "Images/left.jpg"
    ];


let file = "Images/asimotron.jpg";
let fullname = document.querySelector("h2.page_name");
let img = document.querySelector("img.page_avatar_img");
let squareimgs = document.querySelectorAll("a.page_square_photo");
let info = document.querySelector("div.profile_info.profile_info_short");
let lastseen = document.querySelector("div.profile_time_lv")
let description = document.querySelectorAll("div.header_top.clear_fix")

let pcounter = document.querySelectorAll("a.page_counter")

if(pcounter!=null)
{
for(let i=0;i<pcounter.length;i++)
{
}   
}

lastseen.innerHTML="последний раз заходил в 3050 году";
info.innerHTML="Рождение:&nbsp&nbsp&nbsp26 сентября 3030</br>"+
"Место рождения:&nbsp&nbsp&nbsp Планета Марс</br>"+
"Текущие место расположения:&nbsp&nbsp&nbsp Неизвестно (Улетел в сторону созвездия Андромеды)"

if(description[6]!=null)
{
description[6].innerHTML="Фотки с Марса (Мой любимый дом)"
}

if(img!=null)
{
let url = chrome.extension.getURL(file);
img.src = url;
fullname.innerHTML = "Ромыч &quotСверх умный синт&quot Перехрест" ;

for(let i=0; i<squareimgs.length;i++)
{
url = chrome.extension.getURL(imgs[i])
squareimgs[i].style.backgroundImage = "url('"+url+"')";
console.log(i);
}
}
