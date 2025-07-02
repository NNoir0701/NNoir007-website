let currentPage = 0;
const pages = document.querySelectorAll('.page');
const pageNum = document.getElementById('page-num');

function updateBook() {
  pages.forEach((page, index) => {
    if (index < currentPage) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }
  });
  pageNum.textContent = `Halaman ${currentPage + 1}`;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
}

updateBook();
