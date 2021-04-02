const click = () =>{
    const list = document.querySelectorAll(".click-phone");
    const listPhone = [
        "0123.456.789",
        "0123.456.789",
        "0123.456.789"
    ]
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener("click", () =>{
            list[i].textContent = listPhone[i];
        })
    }
}
click();

// list
const list = () =>{
    const North = [
        "Hà Nội",
        "Bắc Giang",
        "Bắc Kạn",
        "Bắc Ninh",
        "Cao Bằng",
        "Điện Biên",
        "Hòa Bình",
        "Hải Dương",
        "Hà Giang",
        "Hà Nam",
        "Hải Phòng",
        "Hưng Yên",
        "Lào Cai",
        "Lai Châu",
        "Lạng Sơn",
        "Ninh Bình",
        "Nam Định",
        "Phú Thọ",
        "Quảng Ninh",
        "Sơn La",
        "Thái Bình",
        "Thái Nguyên",
        "Tuyên Quang",
        "Vĩnh Phúc",
        "Yên Bái"
    ]
    const Middle = [
        "Đà Nẵng",
        "Bình Định",
        "Bình Thuận",
        "Đắk Lắk",
        "Đắk Nông",
        "Gia Lai",
        "Hà Tĩnh",
        "Khánh Hòa",
        "Kon Tum",
        "Lâm Đồng",
        "Nghệ An",
        "Ninh Thuận",
        "Phú Yên",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Trị",
        "Thanh Hóa",
        "Thừa Thiên Huế"
    ]
    const South = [
        "TP.HCM",
        "Bình Dương",
        "Bạc Liêu",
        "Bình Phước",
        "Bến Tre",
        "Cà Mau",
        "Cần Thơ",
        "Đồng Tháp",
        "Đồng Nai",
        "Hậu Giang",
        "Kiên Giang",
        "Long An",
        "Sóc Trăng",
        "Tiền Giang",
        "Tây Ninh",
        "Trà Vinh",
        "Vĩnh Long",
        "Vũng Tàu"
    ]
    const north = document.querySelector(".north");
    const middle = document.querySelector(".middle-1");
    const south = document.querySelector(".south");
    for(let i = 0; i < North.length; i++){
        const p = document.createElement("p");
        p.textContent = North[i];
        north.appendChild(p);
    }
    for(let i = 0; i < Middle.length; i++){
        const p = document.createElement("p");
        p.textContent = Middle[i];
        middle.appendChild(p);
    }
    for(let i = 0; i < South.length; i++){
        const p = document.createElement("p");
        p.textContent = South[i];
        south.appendChild(p);
    }
}
list();