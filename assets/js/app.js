const prayerData = [
  { name: 'ফজর', english: 'Fajr', time: '০৪:৪৫ AM', icon: 'i-fajr', detail: 'ভোরের নামাজ' },
  { name: 'যোহর', english: 'Dhuhr', time: '১২:১৫ PM', icon: 'i-sun', detail: 'দুপুরের নামাজ' },
  { name: 'আসর', english: 'Asr', time: '০৪:৩০ PM', icon: 'i-sun', detail: 'বিকেলের নামাজ' },
  { name: 'মাগরিব', english: 'Maghrib', time: '০৬:০২ PM', icon: 'i-sunset', detail: 'সূর্যাস্তের নামাজ' },
  { name: 'এশা', english: 'Isha', time: '০৭:৩০ PM', icon: 'i-moon', detail: 'রাতের নামাজ' }
];

const mosqueData = [
  { name: 'কেন্দ্রীয় জামে মসজিদ', area: 'লোহাগড়া, নড়াইল', label: 'প্রধান মসজিদ' },
  { name: 'বাজার জামে মসজিদ', area: 'লোহাগড়া বাজার, নড়াইল', label: 'এলাকার মসজিদ' },
  { name: 'উত্তরপাড়া জামে মসজিদ', area: 'লোহাগড়া, নড়াইল', label: 'এলাকার মসজিদ' }
];

const noticeData = [
  { title: 'সালাত অ্যাপে স্বাগতম', date: 'সিস্টেম বিজ্ঞপ্তি', body: 'মসজিদের গুরুত্বপূর্ণ ঘোষণা এই বিভাগে প্রকাশিত হবে। বর্তমানে এটি নমুনা বিজ্ঞপ্তি।' },
  { title: 'নামাজের সময় যাচাই করুন', date: 'গুরুত্বপূর্ণ স্মরণিকা', body: 'এখানে প্রদর্শিত সময়গুলো ডেমো ডেটা। সঠিক সময়ের জন্য মসজিদের ইমাম বা মুয়াজ্জিনের প্রকাশিত সময়সূচি অনুসরণ করুন।' }
];

const getElement = (id) => document.getElementById(id);
const icon = (name, extraClass = '') =>
  '<svg class="svg-icon ' + extraClass + '" aria-hidden="true" focusable="false"><use href="#' + name + '"></use></svg>';

function renderPrayerTimes() {
  const list = getElement('prayerList');
  list.innerHTML = prayerData.map((prayer, index) => {
    const highlighted = index === 1;
    return '<article class="prayer-card' + (highlighted ? ' is-highlighted' : '') + '">' +
      '<div class="prayer-icon">' + icon(prayer.icon) + '</div>' +
      '<div class="prayer-info"><h3>' + prayer.name + '</h3><p>' + prayer.english + ' · ' + prayer.detail + '</p></div>' +
      '<div class="prayer-time">' + prayer.time + '<small>' + (highlighted ? 'নমুনা সময়' : 'ডেমো সময়') + '</small></div>' +
    '</article>';
  }).join('');
}

function renderMosques(query = '') {
  const normalizedQuery = query.trim().toLocaleLowerCase('bn');
  const filtered = mosqueData.filter((mosque) =>
    (mosque.name + ' ' + mosque.area).toLocaleLowerCase('bn').includes(normalizedQuery)
  );
  const results = getElement('mosqueResults');

  if (!filtered.length) {
    results.innerHTML = '<div class="empty-state">এই নামে কোনো মসজিদ পাওয়া যায়নি।<br>অন্য নাম বা এলাকা দিয়ে খুঁজে দেখুন।</div>';
    return;
  }

  results.innerHTML = filtered.map((mosque) =>
    '<article class="item-card"><div class="item-icon">' + icon('i-mosque') + '</div>' +
    '<div class="item-main"><h3>' + mosque.name + '</h3><p>' + icon('i-pin', 'inline-icon') + ' ' + mosque.area + '</p></div>' +
    '<span class="item-meta">' + mosque.label + '</span></article>'
  ).join('');
}

function renderNotices() {
  getElement('noticeResults').innerHTML = noticeData.map((notice) =>
    '<article class="item-card notice-card"><div class="item-icon">' + icon('i-bell') + '</div>' +
    '<div class="item-main"><h3>' + notice.title + '</h3><time>' + notice.date + '</time>' +
    '<p class="notice-body">' + notice.body + '</p></div></article>'
  ).join('');
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.toggle('active', page.id === pageId);
  });
  document.querySelectorAll('.nav-item').forEach((button) => {
    const selected = button.dataset.page === pageId;
    button.classList.toggle('active', selected);
    if (selected) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

let toastTimer;
function showToast(message) {
  const toast = getElement('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.style.display = 'none'; }, 2200);
}

document.querySelectorAll('.nav-item').forEach((button) => {
  button.addEventListener('click', () => showPage(button.dataset.page));
});

getElement('mosqueSearchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  renderMosques(getElement('mosqueSearch').value);
});

getElement('refreshButton').addEventListener('click', () => {
  renderPrayerTimes();
  renderMosques(getElement('mosqueSearch').value);
  renderNotices();
  showToast('দেখানো নমুনা তথ্য আবার সাজানো হয়েছে');
});

getElement('todayLabel').textContent = new Intl.DateTimeFormat('bn-BD', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
}).format(new Date());

renderPrayerTimes();
renderMosques();
renderNotices();
