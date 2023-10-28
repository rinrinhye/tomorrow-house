const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)
