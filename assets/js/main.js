function run() {
    const BuyBtns = document.querySelectorAll('.js-buy-ticker');
    const Modal = document.querySelector('.js-modal');
    const Close = document.querySelector('.js-close');
    const aroundcontainer = document.querySelector('.js-container');

    function hidemodal() {
        Modal.classList.remove('open');
    }
    for (const BuyBtn of BuyBtns) {
        BuyBtn.addEventListener('click', function() {
            Modal.classList.add('open');
        })
    }
    Close.addEventListener('click', hidemodal);
    Modal.addEventListener('click', hidemodal);
    aroundcontainer.addEventListener('click', function(event) {
        event.stopPropagation();
    })
}