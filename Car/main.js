
const hamburger = () =>{
    const hamnav = document.querySelector(".hamburger");
    const content = document.querySelector(".second-nav");
    hamnav.addEventListener("click", () =>{
        content.classList.toggle("click1");
        nav2.classList.toggle("layout");
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