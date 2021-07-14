
    var modal = document.querySelector('.modal');
    var modalTitle = document.querySelector('.modal-title');
    var modalImg = document.querySelector('.modal-img img');
    var modalDesc = document.querySelector('.modal-desc');

    console.log(modalImg,'img')

    function hideModal() {
        modal.style.display = 'none'
    }

    function showModal(title, img, desc) {
        modal.style.display = 'block'
        modalTitle.innerHTML = title;
        modalImg.src = img;
        modalDesc.innerHTML = desc;
    }


