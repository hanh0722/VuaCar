
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
// sticky navbar

const notify = () =>{
    Notification.requestPermission();
}
notify();
const hamburger = () =>{
    const hamnav = document.querySelector(".hamburger");
    const content = document.querySelector(".second-nav");
    const layout1 = document.querySelector(".layout");
    const turnOff = document.querySelector(".turnOff");
    hamnav.addEventListener("click", () =>{
        content.classList.add("click1");
        layout1.classList.add("layout-block");
    })
    turnOff.addEventListener("click", () =>{
        content.classList.remove("click1");
        layout1.classList.remove("layout-block");
    })

}
hamburger();
const block = () =>{
    const list = document.querySelectorAll(".infor-mobile");
    const arrow = document.querySelectorAll(".right-pick .fa-angle-right");
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
// const OptionCar = (list) =>{
//     for(let i = 0; i < list.length; i++){
//         const option = document.createElement("option");
//         option.textContent = list[i];
//     }
// }
const opt = () =>{
    const listCar = document.querySelector("#country");
    const array = [
        "H??ng xe",
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
        "Chi???n Th???ng",
        "Chrysler",
        "Chuy??n d??ng",
        "Citroen",
        "CMC",
        "C???u Long",
        "Daehan",
        "Daewoo",
        "Daihatsu",
        "???? th??nh",
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
        "H??ng kh??c",
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
    ];
    // const Toyota = [
    //     "4 Runner",
    //     "Alphard",
    //     "Avalon",
    //     "Avanza",
    //     "Aygo",
    //     "Camry",
    //     "Carina",
    //     "Celica",
    //     "Corolla",
    //     "Corolla Altis",
    //     "Corolla Cross",
    //     "Corolla Verso",
    //     "Corona",
    //     "Cressida",
    //     "Crown",
    //     "Fortuner",
    //     "Hiace",
    //     "Highlander",
    //     "Hilux",
    //     "Innova",
    //     "Land Cruiser",
    //     "Prado",
    //     "Previa",
    //     "Puplica",
    //     "RAV4",
    //     "Rush",
    //     "Sienna",
    //     "Solara",
    //     "Supra",
    //     "Tundra",
    //     "Van",
    //     "Venza",
    //     "Vios",
    //     "Vista",
    //     "Wigo",
    //     "Wish",
    //     "Yaris",
    //     "Zace"
    // ];
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
        "../Img/audi.gif",
        "../Img/bmw.png",
        "../Img/ford.png",
        "../Img/honda.gif",
        "../Img/hyundai.gif",
        "../Img/kia.png",
        "../Img/lexus.gif",
        "../Img/mazda.png",
        "../Img/mercedes.gif",
        "../Img/mitsubishi.gif",
        "../Img/nissan.png",
        "../Img/peugrot.png",
        "../Img/subaru.gif",
        "../Img/suzuki.gif",
        "../Img/toyota.gif",
        "../Img/Vinfast-logo.png",
        "../Img/volkswagen.png",
        "../Img/Volvo.png"
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
    date.textContent = `Th??ng ${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
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
const changeColor = () =>{
    const input = document.querySelector(".form-control");
    input.addEventListener("click", () =>{
        input.classList.add("change-color");
    })
}
changeColor();

const input = () =>{
    const array = [
        "Email ho???c s??? ??i???n tho???i ????ng nh???p",
        "M???t kh???u"
    ]
    const inp = document.querySelectorAll(".sign-in input");
    for(let i = 0; i < inp.length; i++){
        const span = document.createElement("span");
        span.textContent = "*";
        span.style.color = "red";
        inp[i].setAttribute("placeholder", `${array[i]} ${span.innerHTML}`);
    }
}
input();
const listCountry = () =>{
    const array = [
        "H?? N???i",
        "TP.HCM",
        "???? N???ng",
        "An Giang",
        "B??nh D????ng",
        "B??nh ?????nh",
        "B???c Giang",
        "B???c K???n",
        "B???c Li??u",
        "B???c Ninh",
        "B??nh Ph?????c",
        "B??nh Thu???n",
        "B???n Tre",
        "Cao B???ng",
        "C?? Mau",
        "C???n Th??",
        "??i???n Bi??n", "?????k L???k", "?????ng Th??p", "?????ng Nai", "?????k N??ng", "Gia Lai", "H??a B??nh", "H???i D????ng", "H?? Giang",
        "H???u Giang", "H?? Nam", "H???i Ph??ng", "H?? T??nh", "H??ng Y??n", "Ki??n Giang", "Kh??nh H??a", "Kon Tum", "Long An", 
        "L??o Cai", "Lai Ch??u", "L??m ?????ng", "L???ng S??n", "Ngh??? An", "Ninh B??nh", "Nam ?????nh", "Ninh Thu???n", "Ph?? Th???",
        "Qu???ng B??nh", "Qu???ng Nam", "Qu???ng Ng??i", "Qu???ng Ninh", "Qu???ng Tr???", "S??n La", "S??c Tr??ng", "Th??i B??nh", "Ti???n Giang",
        "Thanh H??a", "Th??i Nguy??n", "T??y Ninh", "Tuy??n Quang", "Th???a Thi??n Hu???", "Tr?? Vinh", "V??nh Long", "V??nh Ph??c", "V??ng T??u"
    ]
    const list = document.getElementById("myUL");
    for(let i = 0; i < array.length; i++){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = array[i]
        li.appendChild(a);
        list.appendChild(li);
    }
    const input = document.querySelector("#myInput");
    input.addEventListener("keyup", () =>{
        var input1, filter, ul, li, a, i, txtValue;
        input1 = input;
        filter = input1.value.toUpperCase();
        ul = list;
        li = ul.getElementsByTagName("li");

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } 
            else {
            li[i].style.display = "none";
        }
        }
    })
    const detail = document.querySelectorAll("#myUL li");
    const detailBox = document.querySelector("#myInput");
    for(let j = 0; j < detail.length; j++){
        detail[j].addEventListener("click", () =>{
            detailBox.value = array[j];
        })
    }
    const arr = document.querySelector(".class-arrow i");
    arr.addEventListener("click", () =>{
        list.classList.toggle("toggle-block");
    })
}
listCountry();

// show up when we click the form inside, sign in or sign up
const form = () =>{
    const signIn = document.querySelector(".sign-in-1");
    const signUp = document.querySelector(".sign-up-1");
    const contentSignIn = document.querySelector(".sign-in");
    const contentSignUp = document.querySelector(".sign-up");
    signIn.addEventListener("click", () =>{
        contentSignIn.style.display = "block";
        signIn.style.borderColor = "#da5427";
        signUp.style.borderColor = "#ddd";
        contentSignUp.style.display = "none";
    })
    signUp.addEventListener("click", () =>{
        contentSignIn.style.display = "none";
        contentSignUp.style.display = "block";
        signIn.style.borderColor = "#ddd";
        signUp.style.borderColor = "#da5427";
    })
}
form();

// click outside and show true place with sign in or sign up
const formOut = () =>{
    const sign = document.querySelectorAll(".right p");
    const x = document.querySelector(".fa-times-1");
    const popUp = document.querySelector(".pop-up-menu");
    const layout = document.querySelector(".layout-black");
    x.addEventListener("click", () =>{
        popUp.style.display = "none";
        layout.style.display = "none";
    })
    const signIn = document.querySelector(".sign-in");
    const signUp = document.querySelector(".sign-up");
    const border1 = document.querySelector(".sign-in-1");
    const border2 = document.querySelector(".sign-up-1");
    for(let i = 0; i < sign.length; i++){
        sign[i].addEventListener("click", () =>{
            popUp.style.display = "block";
            layout.style.display = "block";
            if(i === 1){
                signIn.style.display = "block";
                signUp.style.display = "none";
                border2.style.borderColor = "#ddd";
                border1.style.borderColor = "#da5427"
            }
            else{
                signIn.style.display = "none";
                signUp.style.display = "block";
                border2.style.borderColor = "#da5427";
                border1.style.borderColor = "#ddd";
            }
       })
    }
}
formOut();