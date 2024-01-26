// Zoom information
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".zoomable");

    image.addEventListener("mousemove", function(e) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        this.style.transformOrigin = `${x}% ${y}%`;
    });

    image.addEventListener("mouseenter", function() {
        this.classList.add("zoomed");
    });

    image.addEventListener("mouseleave", function() {
        this.classList.remove("zoomed");
    });
});

// Get references to the elements
var containerLeftSmall = document.querySelector('.container-left-small');
var containerLeftBig = document.querySelector('.container-left-big img');

// Add a click event listener to the container-left-small
containerLeftSmall.addEventListener('click', function(event) {
    // Check if the clicked element is an image
    if (event.target.tagName === 'IMG') {
        // Set the src attribute of the container-left-big image to the clicked image src
        containerLeftBig.src = event.target.src;
    }
});

 // Lấy tham chiếu đến các phần tử
 var container1Images = document.querySelectorAll('.container1 img');

 // Thêm bộ lắng nghe sự kiện mouseover và mouseout cho mỗi ảnh
 container1Images.forEach(function(image) {
     image.addEventListener('mouseover', function() {
         // Thêm lớp zoom-in khi chuột hover vào ảnh
         image.classList.add('zoom-in');
     });

     image.addEventListener('mouseout', function() {
         // Xóa lớp zoom-in khi chuột rời khỏi ảnh
         image.classList.remove('zoom-in');
     });
 });

 // Lấy tham chiếu đến nội dung dropdown và các liên kết liên quan
 var dropdownContent = document.querySelector('.dropdown-content2');
 var sapXepTangLink = document.getElementById('sapXepTang');
 var sapXepGiamLink = document.getElementById('sapXepGiam');

 // Thêm bộ lắng nghe sự kiện click cho các liên kết
 sapXepTangLink.addEventListener('click', function() {
     // Gọi hàm xử lý sắp xếp theo thứ tự tăng dần
     xuLySapXep('tang');
 });

 sapXepGiamLink.addEventListener('click', function() {
     // Gọi hàm xử lý sắp xếp theo thứ tự giảm dần
     xuLySapXep('giam');
 });

 function xuLySapXep(thuTu) {
     // Thực hiện logic sắp xếp của bạn ở đây dựa trên thứ tự đã chọn
     // Ví dụ, bạn có thể cập nhật giao diện người dùng hoặc kích hoạt một yêu cầu AJAX
     console.log('Thứ tự sắp xếp:', thuTu);
 }