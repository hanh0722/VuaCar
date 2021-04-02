
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector(".second-nav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// get notification
const notify = () =>{
    Notification.requestPermission();
}
notify();
const hamburger = () =>{
    const hamnav = document.querySelector(".hamburger");
    const content = document.querySelector(".second-nav");
    hamnav.addEventListener("click", () =>{
        content.classList.toggle("click1");
        // nav2.classList.toggle("layout");
    })
}
hamburger();

const block = () =>{
    const list = document.querySelectorAll(".infor-mobile");
    const arrow = document.querySelectorAll(".right-pick i");
    for(let i = 0; i < list.length; i++){
        arrow[i].addEventListener("click", () =>{
            arrow[i].classList.toggle("rotate");
            list[i].classList.toggle("block");
        })
    }
}
block();

// change the color of the bookmark
const bookMark = () =>{
    const icon = document.querySelectorAll(".fa-bookmark-o");
    for(let i = 0; i < icon.length; i++){
        icon[i].addEventListener("click", () =>{
            let check = icon[i].classList.toggle("fa-bookmark");
            if(check === true){
                icon[i].classList.remove("fa-bookmark-o");
            }
            else{
                icon[i].classList.add("fa-bookmark-o");
            }
        })
    }
}

bookMark();
// draw color to the star

const draw = () =>{
    const value = document.querySelectorAll(".number-rate");
    const star = document.querySelectorAll(".fa-star");
    let next = 0;
    for(let i = 0; i < value.length; i++){
        let text = value[i].innerText;
        let numberText = Number(text);
        for(let j = next; j < next + 5; j++){
            if(numberText < 1){
                star[j].style.color = "transparent";
            }
            else if(numberText >= 1 && numberText < 1.5){
                j === next ? star[j].style.color = "#fec600" : star[j].classList.add("fa-star-o");
            }
            else if(numberText >= 1.5 && numberText < 2){
                if(j === next){
                    star[j].style.color = "#fec600";
                }
                else if(j === next + 1){
                    star[j].classList.add("fa-star-half-o");
                }
                else{
                    star[j].classList.add("fa-star-o");
                }
            }
            else if(numberText >= 2 && numberText < 2.5){
                j <= next + 1 ? star[j].style.color = "#fec600" : star[j].classList.add("fa-star-o");
            }
            else if(numberText >= 2.5 && numberText < 3){
                if(j <= next + 1){
                    star[j].style.color = "#fec600";
                }
                else if(j === next + 1 + 1){
                    star[j].classList.add("fa-star-half-o");
                }
                else{
                    star[j].classList.add("fa-star-o");
                }
            }
            else if(numberText >= 3 && numberText < 3.5){
                j <= next + 2 ? star[j].style.color = "#fec600" : star[j].classList.add("fa-star-o");
            } 
            else if(numberText >= 3.5 && numberText < 4){
                if(j <= next + 2){
                    star[j].style.color = "#fec600";
                }
                else if(j === next + 3){
                    star[j].classList.add("fa-star-half-o");
                }
                else{
                    star[j].classList.add("fa-star-o");
                }
            }
            else if(numberText >= 4 && numberText < 4.5){
                j <= next + 3 ? star[j].style.color = "#fec600" : star[j].classList.add("fa-star-o");
            }
            else if(numberText >= 4.5 && numberText < 5){
                if(j <= next + 3){
                    star[j].style.color = "#fec600";
                }
                else if(j === next + 4){
                    star[j].classList.add("fa-star-half-o");
                }
                else{
                    star[j].classList.add("fa-star-o");
                }
            }
            else if(numberText === 5){
                star[j].style.color = "#fec600";
            }  
        }
        next = next + 5;
    }
}
draw();
// create option 

const opt = () =>{
    const listCar = document.querySelector("#country");
    const array = [
        "Hãng xe",
        "Toyota",
        "Honda",
        "Huyndai",
        "Mazda",
        "Kia",
        "Ford",
        "Chevrolet",
        "Nissan",
        "Mitsubishi",
        "BMW",
        "Mercedes-Benz",
        "VinFast",
        "Acura",
        "Alfa Romeo",
        "Asia",
        "Aston Martin",
        "Audi",
        "BAIC",
        "Bentley",
        "Brilliance",
        "Bugatti",
        "Buick",
        "BYD",
        "Cadillac",
        "Changan",
        "Chenglong",
        "Chery",
        "Chiến Thắng",
        "Chrysler",
        "Chuyên dùng",
        "Citroen",
        "CMC",
        "Cửu Long",
        "Daehan",
        "Daewoo",
        "Daihatsu",
        "Đô thành",
        "Dodge",
        "Dongben",
        "Dongfeng (DFM)",
        "Eagle",
        "Ferrari",
        "Fiat",
        "Fuso",
        "Gaz",
        "Geely",
        "Genesis",
        "Geo",
        "GMC",
        "Great wall",
        "Haima",
        "Hãng khác",
        "Hino",
        "Hoa Mai",
        "Howo",
        "Hummer",
        "Infiniti",
        "Isuzu",
        "JAC",
        "Jaguar",
        "Jeep",
        "Jonway",
        "JRD",
        "Kamaz",
        "Lada",
        "Lamborghini",
        "Lancia",
        "LandRover",
        "Lexus",
        "Lifan",
        "Lincoln",
        "Lotus",
        "Luxgen",
        "Maserati",
        "Maybach",
        "Maz Asia",
        "McLaren",
        "Mekong",
        "Mercury",
        "MG",
        "Mini",
        "Oldsmobile",
        "Opel",
        "Peugeot",
        "Plymouth",
        "PMC",
        "Pontiac",
        "Porsche",
        "Proton",
        "Renault",
        "Riich",
        "Rolls-Royce",
    ]
    for(let i = 0; i < array.length; i++){
        const option = document.createElement("option");
        option.textContent = array[i];
        listCar.appendChild(option);
    }
}
opt();

// create box brand
const boxBrand = () =>{
    const array = [
        "Audi",
        "BMW",
        "Ford",
        "Honda",
        "Huyndai",
        "Kia",
        "Lexus",
        "Mazda",
        "Mercedes-Benz",
        "Mitsubishi",
        "Nissan",
        "Peugeot",
        "Subaru",
        "Suzuki",
        "Toyota",
        "VinFast",
        "Volkswagen",
        "Volvo"
    ]
    const image = [
        "../Car/Img/audi.gif",
        "../Car/Img/bmw.png",
        "../Car/Img/ford.png",
        "../Car/Img/honda.gif",
        "../Car/Img/hyundai.gif",
        "../Car/Img/kia.png",
        "../Car/Img/lexus.gif",
        "../Car/Img/mazda.png",
        "../Car/Img/mercedes.gif",
        "../Car/Img/mitsubishi.gif",
        "../Car/Img/nissan.png",
        "../Car/Img/peugrot.png",
        "../Car/Img/subaru.gif",
        "../Car/Img/suzuki.gif",
        "../Car/Img/toyota.gif",
        "../Car/Img/Vinfast-logo.png",
        "../Car/Img/volkswagen.png",
        "../Car/Img/Volvo.png"
    ]
    const box = document.querySelector(".box-brand");
    for(let i = 0; i < array.length; i++){
        const div = document.createElement("div");
        div.className = "small-box";
        const img = document.createElement("img");
        img.src = image[i];
        const p = document.createElement("p");
        const a = document.createElement("a");
        a.setAttribute("href", `${array[i]}.html`);
        p.textContent = array[i];
        a.appendChild(p);
        div.appendChild(img);
        div.appendChild(a);
        box.appendChild(div);
    }
}
boxBrand();

const Date1 = () =>{
    const date = document.querySelector(".Date");
    date.textContent = `Tháng ${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
}
Date1();

// close button

const blockBtn = () =>{
    const open = document.querySelector(".btn-open");
    const mobile = document.querySelector(".mobile-list");
    const close = document.querySelector(".btn-close");
    open.addEventListener("click", () =>{
        mobile.classList.toggle("block-content");
    })
}
blockBtn();

// change video
const video = () =>{
    const title = document.querySelectorAll(".right-items-box p:first-child");
    const date = document.querySelectorAll(".right-items-box p:last-child");
    const titleVideo = document.querySelector(".title-video");
    const dateVideo = document.querySelector(".date-video");
    const button = document.querySelectorAll(".fa-12");
    const iframe = document.querySelector("iframe");
    const link = [
        "https://www.youtube.com/embed/iCss97gABtQ",
        "https://www.youtube.com/embed/N4d6MCJf24Q",
        "https://www.youtube.com/embed/1JON0811GAc",
        "https://www.youtube.com/embed/YOpJfx_ujDg",
        "https://www.youtube.com/embed/Ag3-k4PRMbU"
    ]
    for(let i = 0; i < title.length; i++){
        let content = title[i].innerText;
        let dateShow = date[i].innerText;
        button[i].addEventListener("click", () =>{
            titleVideo.textContent = content;
            dateVideo.textContent = dateShow;
            iframe.setAttribute("src", link[i]);
        })
    }
}
video();