function Footer (){
    return `
    <div class="footer-last">
        <div class="first-footer">
            <ul>
                <li><a href="">Hỗ trợ khách hàng</a></li>
                <li><a href="">Quy định chính sách</a></li>
                <li><a href="">Điều khoản hoạt động salon</a></li>
                <li><a href="">Câu hỏi thường gặp</a></li>
            </ul>
            <ul>
                <li><a href="">Về chúng tôi</a></li>
                <li><a href="">Giới thiệu</a></li>
                <li><a href="">Quy chế hoạt động</a></li>
                <li><a href="">Tuyển dụng</a></li>
                <li><a href="">Sitemap</a></li>
            </ul>
            <ul>
                <li><a href="">Tin tức bán xe hơi</a></li>
                <li><a href="">Báo giá dịch vụ</a></li>
                <li><a href="">Khuyến mại từ các hãng</a></li>
                <li><a href="">Cải tiến & tính năng mới</a></li>
            </ul>
            <ul class="list-items-ft">
                <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                <li><a href=""><i class="fa fa-youtube" aria-hidden="true"></i> Youtube</a></li>
                <li><a href=""><i class="fa fa-users" aria-hidden="true"></i> Partner</a></li>
            </ul>
            <ul class="img-list">
                <img src="https://img1.oto.com.vn/Static/Images/v3/wap_v2.png" alt="">
                <img src="https://img1.oto.com.vn/Static/Images/v3/wap_v2.png" alt="">
                <img src="https://img1.oto.com.vn/Static/Images/v3/wap_v2.png" alt="">
            </ul>
        </div>
        <div class="second-footer">
            <div class="first-is">
                <p>Sàn giao dịch thương mại điện tử vuaxe.com</p>
                <p>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2021 Vuaxe.com.vn - NewgenMedia.com.vn</p>
                <div class="footer-1">
                    <div class="first-is">
                        <i class="fa fa-phone" aria-hidden="true"></i> 0965.131.633</p>
                    </div>
                    <div class="second-is">
                        <i class="fa fa-envelope" aria-hidden="true"></i> hotro@oto.com.vn
                    </div>
                    <div class="third-is">
                        <a href="skype:live:"><i class="fa fa-skype" aria-hidden="true"></i></a>
                    </div>
                </div>
                <p class="title-p">
                    <img src="https://img1.oto.com.vn/Static/Images/bct-dadangky.png" alt=""> Giấy phép ICP số 978/GP-TTĐT
                </p>
            </div>
            <div class="second-is"></div>
        </div>
        <div class="section">
            <p>Địa chỉ trụ sở chính</p>
            <p>169 Nguyễn Ngọc Vũ, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội.</p>
        </div>
    </div>
    `
}
const FT = document.querySelector("#footer");
FT.innerHTML = Footer();