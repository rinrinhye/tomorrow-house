const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteButtons = Array.from(
  gnbSearchHistoryList.querySelectorAll('.delete-button')
)

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistory)
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
