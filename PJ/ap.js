const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");
const opinionTextarea = document.querySelector("textarea[name='opinion']");
const reviewFeedback = document.querySelector(".review-feedback");
const reviewStars = reviewFeedback.querySelectorAll(".stars .bx-star");
const reviewOpinion = reviewFeedback.querySelector(".opinion");

// Kiểm tra xem có giá trị đánh giá và ghi chú trong Local Storage không
const storedRating = localStorage.getItem("userRating");
const storedOpinion = localStorage.getItem("userOpinion");

if (storedRating) {
  const rating = parseInt(storedRating);
  const opinion = storedOpinion || "";
  if (rating >= 1 && rating <= 5) {
    // Cập nhật đánh giá và giao diện ngôi sao theo giá trị từ Local Storage
    updateRating(rating);
    opinionTextarea.value = opinion;
    updateReviewFeedback(rating, opinion);
  }
}

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    const rating = idx + 1;
    updateRating(rating);
    ratingValue.value = rating;

    // Lưu giá trị đánh giá vào Local Storage
    localStorage.setItem("userRating", rating);
  });
});

opinionTextarea.addEventListener("input", function () {
  const opinion = opinionTextarea.value;
  localStorage.setItem("userOpinion", opinion);
  updateReviewFeedback(parseInt(ratingValue.value), opinion);
});

function updateRating(rating) {
  allStar.forEach((i, idx) => {
    i.classList.toggle("bxs-star", idx < rating);
    i.classList.toggle("bx-star", idx >= rating);
  });
}

function updateReviewFeedback(rating, opinion) {
  reviewStars.forEach((i, idx) => {
    i.classList.toggle("bxs-star", idx < rating);
    i.classList.toggle("bx-star", idx >= rating);
  });

  reviewOpinion.textContent = `Your Opinion: ${opinion || "No opinion yet"}`;
}
