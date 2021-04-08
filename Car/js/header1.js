function Header(){
    return `
    <div class="first-nav">
    <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
    <div class="logo">
        <img src="http://vuaxe.com.vn/Assets/VuaOTo/img/vuaxe.png" alt="">
    </div>
    <div class="left-nav">
        <p><a href="tel:">Hotline: 0123.456.789</a></p>
        <p><a href="">Báo giá</a></p>
    </div>
    <div class="right-nav">
        <div class="input">
            <input class="form-control" type="text" placeholder="Tìm kiếm theo hãng xe, dòng xe">
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <div class="right">
            <p>Đăng ký</p>
            <span>|</span>
            <p>Đăng nhập</p>
        </div>
    </div>
    <i class="fa fa-search fa-new" aria-hidden="true"></i>
</div>
<div class="second-nav">
    <div class="logo-nav">
        <img src="http://vuaxe.com.vn/Assets/VuaOTo/img/vuaxe.png" alt="">
    </div>
    <ul class="right-pick">
    <i class="fa fa-times turnOff" aria-hidden="true"></i>
    <li class="sign-in-mobile"><a href="">Đăng nhập</a> | <a href="">Đăng ký</a></li>
        <li>
            <a href="">Mua bán ô tô</a>
            <div class="information">
                <div class="top-if">
                    <div class="first-if">
                        <p><a href="">Honda City</a></p>
                        <p><a href="">Honda CRV</a></p>
                        <p><a href="">Toyota Vios</a></p>
                        <p><a href="">Toyota Fortuner</a></p>
                        <p><a href="">Ford Ranger</a></p>
                    </div>
                    
                    <div class="second-if">
                        <p><a href="">Acura</a></p>
                        <p><a href="">Audi</a></p>
                        <p><a href="">BMW</a></p>
                        <p><a href="">Chevrolet</a></p>
                        <p><a href="">Daewoo</a></p>
                        <p><a href="">Dongfeng (DFM)</a></p>
                        <p><a href="">Ford</a></p>
                        <p><a href="">Honda</a></p>
                        <p><a href="">Huyndai</a></p>
                        <p><a href="">Isuzu</a></p>
                        <p><a href="">Kia</a></p>
                        <p><a href="">LandRover</a></p>
                    </div>
                </div>
                <div class="bottom-if">
                    <div class="first-if">
                        <p><a href="">BMW 320i</a></p>
                        <p><a href="">Mercedes C200</a></p>
                        <p><a href="">Mercedes C300</a></p>
                        <p><a href="">Mercedes E200</a></p>
                        <p><a href="">Lexus LX570</a></p>
                    </div>
                    <div class="second-if">
                        <p><a href="">Lexus</a></p>
                        <p><a href="">Mazda</a></p>
                        <p><a href="">Mercedes-Benz</a></p>
                        <p><a href="">Mitsubishi</a></p>
                        <p><a href="">Nissan</a></p>
                        <p><a href="">Peugeot</a></p>
                        <p><a href="">Suzuki</a></p>
                        <p><a href="">Toyota</a></p>
                        <p><a href="">VinFast</a></p>
                        <p><a href="">Volkswagen</a></p>
                        <p><a href="">Xe tải</a></p>
                        <p><a href="">Hãng xe khác</a></p>
                    </div>
                </div>
            </div>
        </li>
        <li class="mobile"><a href="">Bán xe ngay</a></li>
        <li>
            <a href="">Danh bạ</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information information2 infor-mobile">
                <div class="list-2">
                    <p><a href="contact.html">Danh bạ Showroom</a></p>
                    <p><a href="contact-nks.html">Danh bạ nhà kinh doanh xe</a></p>
                    <p><a href="contact-dt.html">Danh bạ đối tác</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="">Giá xe ô tô</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile">
                <div class="first-list">
                    <p><a href="">Giá xe Vinfast</a></p>
                    <p><a href="">Giá xe Mercedes</a></p>
                    <p><a href="">Giá xe Volvo</a></p>
                    <p><a href="">Giá xe Volkswagen</a></p>
                    <p><a href="">Giá xe Toyota</a></p>
                    <p><a href="">Giá xe Suzuki</a></p>
                    <p><a href="">Giá xe Subaru</a></p>
                    <p><a href="">Giá xe Porsche</a></p>
                    <p><a href="">Giá xe Peugeot</a></p>
                    <p><a href="">Giá xe Nissan</a></p>
                    <p><a href="">Giá xe Mitsubishi</a></p>
                    <p><a href="">Giá xe MG</a></p>
                </div>
                <div class="second-list">
                    <p><a href="">Giá xe Mazda</a></p>
                    <p><a href="">Giá xe Maserati</a></p>
                    <p><a href="">Giá xe Lexus</a></p>
                    <p><a href="">Giá xe LandRover</a></p>
                    <p><a href="">Giá xe Kia</a></p>
                    <p><a href="">Giá xe Jeep</a></p>
                    <p><a href="">Giá xe Huyndai</a></p>
                    <p><a href="">Giá xe Honda</a></p>
                    <p><a href="">Giá xe Ford</a></p>
                    <p><a href="">Giá xe BMW</a></p>
                    <p><a href="">Giá xe Audi</a></p>
                    <p><a href="">Giá bán xe tải</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="">Đánh giá xe</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information information4 infor-mobile">
                <div>
                    <p><a href="">Đánh giá xe Ford Explorer 2021</a></p>
                    <p><a href="">Đánh giá xe Honda City RS 2021</a></p>
                    <p><a href="">Đánh giá xe Kia Sorento 2021</a></p>
                    <p><a href="">Đánh giá xe Ford Ranger Wildtrak 2021</a></p>
                    <p><a href="">Đánh giá xe Ford Everest 2021</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="">Kinh nghiệm</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile infor-34">
                <div>
                    <p><a href="">Kinh nghiệm lái xe</a></p>
                    <p><a href="">Chăm sóc và bảo dưỡng ô tô</a></p>
                    <p><a href="">Kinh nghiệm mua / bán xe</a></p>
                </div>
            </div>
        </li>
        <li>
            <a href="">Tư vấn xe</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile infor-35">
                <div>
                    <p><a href="">Mua xe trả góp</a></p>
                    <p><a href="">Tin tức pháp luật</a></p>
                    <p><a href="">Bảo hiểm xe</a></p>
                    <p><a href="">Phong thủy xe</a></p>
                </div>
            </div>
        </li>
        <li><a href="">Otowiki</a></li>
        <li class="mobile">
            <a href="">Tin tức</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile">
                <div>
                    <p><a href="">Thị trường ô tô</a></p>
                    <p><a href="">An toàn giao thông</a></p>
                    <p><a href="">Sự kiện</a></p>
                    <p><a href="">Khuyến mãi</a></p>
                    <p><a href="">Ưu đãi</a></p>
                    <p><a href="">Học viện ô tô</a></p>
                    <p><a href="">Công nghệ mới</a></p>
                    <p><a href="">Khám phá</a></p>
                </div>
            </div>
        </li>
        <li class="mobile">
            <a href="">Thông tin xe</a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <div class="information infor-mobile">
                <div>
                    <p><a href="">So sánh xe</a></p>
                    <p><a href="">Xe mới</a></p>
                    <p><a href="">Thông số kỹ thuật</a></p>
                    <p><a href="">Xe sắp ra mắt tại VN</a></p>
                    <p><a href="">Xe bán chạy trong tháng</a></p>
                    <p><a href="">Lịch sử các hãng xe</a></p>
                    <p><a href="">Video</a></p>
                </div>
            </div>
        </li>
        <li class="mobile">
            <a href="">Chat với Oto.com.vn</a>
        </li>
        <li class="mobile"><a href="">Trợ giúp</a></li>
        <li class="mobile"><a href="tel:">Liên hệ</a></li>
        <li>
            <a href="">...</a>
            <div class="information information-last">
                <div class="first-list first-list1">
                    <p class="header-class"><a href="">Tin tức</a></p>
                    <p><a href="">Thị trường ô tô</a></p>
                    <p><a href="">An toàn giao thông</a></p>
                    <p><a href="">Sự kiện</a></p>
                    <p><a href="">Khuyến mại</a></p>
                    <p><a href="">Ưu đãi</a></p>
                    <p><a href="">Học viện ô tô</a></p>
                    <p><a href="">Công nghệ mới</a></p>
                    <p><a href="">Khám phá</a></p>
                </div>
                <div class="second-list second-list1">
                    <p class="header-class"><a href="">Thông tin xe</a></p>
                    <p><a href="">So sánh xe</a></p>
                    <p><a href="">Xe mới</a></p>
                    <p><a href="">Thông số kỹ thuật</a></p>
                    <p><a href="">Xe sắp ra mắt tại VN</a></p>
                    <p><a href="">Xe bán chạy trong tháng</a></p>
                    <p><a href="">Lịch sử các hãng xe</a></p>
                    <p><a href="">Video</a></p>
                </div>
            </div>
        </li>
        <button class="btn btn-success"><a href="">Đăng tin</a></button>
    </ul>
    </div>
    `
}
const H1 = document.querySelector("#Header");
H1.innerHTML = Header();
