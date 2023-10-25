const orderCta = document.querySelector('.order-cta')

const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderMoal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderMoal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderMoal)
orderModalOverlay.addEventListener('click', closeOrderMoal)
