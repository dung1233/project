const myButton1 = document.getElementById("myButton1");
const myPopup1 = document.getElementById("myPopup1");
const closePopup1 = document.getElementById("closePopup1");

myButton1.addEventListener("click", function () {
  myPopup1.style.display = "block";
});

closePopup1.addEventListener("click", function () {
  myPopup1.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup1) {
    myPopup1.style.display = "none";
  }
});

const myButton2 = document.getElementById("myButton2");
const myPopup2 = document.getElementById("myPopup2");
const closePopup2 = document.getElementById("closePopup2");

myButton2.addEventListener("click", function () {
  myPopup2.style.display = "block";
});

closePopup2.addEventListener("click", function () {
  myPopup2.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup2) {
    myPopup2.style.display = "none";
  }
});

const myButton3 = document.getElementById("myButton3");
const myPopup3 = document.getElementById("myPopup3");
const closePopup3 = document.getElementById("closePopup3");

myButton3.addEventListener("click", function () {
  myPopup3.style.display = "block";
});

closePopup3.addEventListener("click", function () {
  myPopup3.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup3) {
    myPopup3.style.display = "none";
  }
});

/* js tinh tien */
// function updatePrice(selectElement) {
//   const selectedValue = selectElement.value;
//   const priceElement =
//     selectElement.parentElement.previousElementSibling.querySelector(".price");

//   // Cập nhật giá tiền dựa trên lựa chọn của người dùng
//   switch (selectedValue) {
//     case "re":
//       priceElement.textContent = "100";
//       break;
//     case "trungbinh":
//       priceElement.textContent = "150";
//       break;
//     case "dat":
//       priceElement.textContent = "200";
//       break;
//     default:
//       break;
//   }
// }

// function updatePrice(selectElement) {
//   const row = selectElement.parentElement.parentElement;
//   const selectedValue = selectElement.value;
//   const priceElement = row.querySelector(".price");
//   const holidayDiscount = row.querySelector(".holiday-discount").checked;
//   const childDiscount = row.querySelector(".child-discount").checked;

//   // Giá gốc
//   const originalPrice = parseInt(priceElement.textContent);

//   // Tính toán giảm giá và tăng giá dựa trên các yếu tố
//   let finalPrice = originalPrice;

//   if (holidayDiscount) {
//     finalPrice *= 1.5; // Giảm giá 10% vào ngày lễ
//   }

//   if (childDiscount) {
//     finalPrice -= 10; // Giảm 10 VNĐ cho trẻ em
//   }

//   switch (selectedValue) {
//     case "trungbinh":
//       finalPrice *= 1.1; // Tăng giá 10% cho cấp giá trung bình
//       break;
//     case "dat":
//       finalPrice *= 1.2; // Tăng giá 20% cho cấp giá đắt
//       break;
//     default:
//       break;
//   }

//   // Cập nhật giá cuối cùng trong bảng
//   const finalPriceElement = row.querySelector(".final-price");
//   finalPriceElement.textContent = finalPrice.toFixed(2) + " VNĐ";
// }

// Tính toán giá ban đầu cho mỗi món
// const rows = document.querySelectorAll("tr");
// for (let i = 1; i < rows.length; i++) {
//   updatePrice(rows[i].querySelector(".price-level"));
// }
// $(document).ready(function () {
//   const bigContainer = $(".big-container");
//   const smallContainers = bigContainer.find(".small-container");
//   const slideWidth = 25; // Kích thước của mỗi slide (%)
//   let currentIndex = 0;

//   // Hàm để di chuyển đến slide trước đó
//   function prevSlide() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = smallContainers.length - 1;
//     }
//     showSlide(currentIndex);
//   }

//   // Hàm để di chuyển đến slide kế tiếp
//   function nextSlide() {
//     currentIndex++;
//     if (currentIndex >= smallContainers.length) {
//       currentIndex = 0;
//     }
//     showSlide(currentIndex);
//   }

//   // Sự kiện khi nhấn nút "Trái"
//   $("#prevButton").click(prevSlide);

//   // Sự kiện khi nhấn nút "Phải"
//   $("#nextButton").click(nextSlide);

//   // Hàm hiển thị slide hiện tại
//   function showSlide(index) {
//     const offset = -index * slideWidth;
//     bigContainer.css("transform", `translateX(${offset}%)`);
//   }

//   // Hiển thị slide đầu tiên
//   showSlide(currentIndex);
// });
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});
