const prayerData = [
  { key: 'fajr', name: 'ফজর', english: 'Fajr', time: '০৪:৪৫ AM', icon: 'i-fajr', detail: 'ভোরের নামাজ' },
  { key: 'dhuhr', name: 'যোহর', english: 'Dhuhr', time: '১২:১৫ PM', icon: 'i-sun', detail: 'দুপুরের নামাজ' },
  { key: 'asr', name: 'আসর', english: 'Asr', time: '০৪:৩০ PM', icon: 'i-sun', detail: 'বিকেলের নামাজ' },
  { key: 'maghrib', name: 'মাগরিব', english: 'Maghrib', time: '০৬:০২ PM', icon: 'i-sunset', detail: 'সূর্যাস্তের নামাজ' },
  { key: 'isha', name: 'এশা', english: 'Isha', time: '০৭:৩০ PM', icon: 'i-moon', detail: 'রাতের নামাজ' }
];

const jumuahData = { key: 'jumuah', name: 'জুমার নামাজ', english: 'Jumu’ah', time: '—:—', icon: 'i-mosque', detail: 'শুক্রবারের জামাত' };
const mosqueData = [
  { name: 'কেন্দ্রীয় জামে মসজিদ', area: 'লোহাগড়া, নড়াইল', label: 'প্রধান মসজিদ' },
  { name: 'বাজার জামে মসজিদ', area: 'লোহাগড়া বাজার, নড়াইল', label: 'এলাকার মসজিদ' },
  { name: 'উত্তরপাড়া জামে মসজিদ', area: 'লোহাগড়া, নড়াইল', label: 'এলাকার মসজিদ' }
];
const noticeData = [];
const translations = {
  bn: {
    appName:'সালাত',appSubtitle:'মসজিদ সালাত ব্যবস্থাপনা',navTimes:'নামাজের সময়',navMosques:'নিকটবর্তী মসজিদ',navNotices:'বিজ্ঞপ্তি',navSettings:'সেটিংস',navAbout:'আমাদের সম্পর্কে',navContact:'যোগাযোগ',
    timesTitle:'নামাজের সময়',timesSubtitle:'পাঁচ ওয়াক্ত নামাজের নির্ধারিত সময়',nextPrayer:'পরবর্তী নামাজ',prayerTimesManaged:'মসজিদ কর্তৃপক্ষের নির্ধারিত সময়',
    searchMosques:'নাম অথবা এলাকা দিয়ে খুঁজুন',searchPlaceholder:'মসজিদের নাম বা এলাকা',searchButton:'খুঁজুন',noticesSubtitle:'মসজিদের ঘোষণা ও গুরুত্বপূর্ণ তথ্য',
    settingsSubtitle:'অ্যাপ আপনার পছন্দমতো সাজান',appearance:'থিম',appearanceDesc:'ডার্ক মুড বা লাইট মুড নির্বাচন করুন',light:'লাইট',dark:'ডার্ক',
    language:'ভাষা',languageDesc:'অ্যাপের ভাষা পরিবর্তন করুন',bangla:'বাংলা',english:'English',prayerManagement:'নামাজ ম্যানেজমেন্ট',
    prayerManagementDesc:'নামাজের সময় বিভাগে কোন নামাজ দেখানো হবে নির্বাচন করুন।',jumuah:'জুমার নামাজ',jumuahDesc:'চালু করলে নামাজের সময়ের তালিকায় দেখাবে',
    showJumuah:'জুমার নামাজ দেখান',adminNote:'নামাজের সময় মসজিদ কর্তৃপক্ষের অ্যাডমিনগণ নির্ধারণ করবেন। এই ব্যবস্থাপনা পরে সংযুক্ত করা হবে।',
    aboutTitle:'সালাত — মসজিদ সালাত ব্যবস্থাপনা',aboutText:'মসজিদের নির্ধারিত নামাজের সময়, ঘোষণা এবং প্রয়োজনীয় তথ্য সহজে দেখানোর জন্য তৈরি একটি পরিষ্কার ও ব্যবহারবান্ধব অ্যাপ.',
    contactSubtitle:'মসজিদ কর্তৃপক্ষের সঙ্গে যোগাযোগের তথ্য',contactTitle:'যোগাযোগের তথ্য',contactText:'যোগাযোগের ফোন নম্বর, ইমেইল ও ঠিকানা অ্যাডমিন প্যানেল থেকে পরে যুক্ত করা হবে।',
    noNotices:'এখন কোনো বিজ্ঞপ্তি নেই।',noMosques:'এই নামে কোনো মসজিদ পাওয়া যায়নি। অন্য নাম বা এলাকা দিয়ে খুঁজে দেখুন।',primaryMosque:'প্রধান মসজিদ',localMosque:'এলাকার মসজিদ',
    fajr:'ফজর',dhuhr:'যোহর',asr:'আসর',maghrib:'মাগরিব',isha:'এশা',jumuahPrayer:'জুমার নামাজ',
    fajrDetail:'ভোরের নামাজ',dhuhrDetail:'দুপুরের নামাজ',asrDetail:'বিকেলের নামাজ',maghribDetail:'সূর্যাস্তের নামাজ',ishaDetail:'রাতের নামাজ',jumuahDetail:'শুক্রবারের জামাত',
    searchNoResult:'কোনো মসজিদ পাওয়া যায়নি।',refreshMessage:'তথ্য আবার দেখানো হয়েছে'
  },
  en: {
    appName:'Salat',appSubtitle:'Mosque Prayer Management',navTimes:'Prayer Times',navMosques:'Nearby Mosques',navNotices:'Notices',navSettings:'Settings',navAbout:'About Us',navContact:'Contact',
    timesTitle:'Prayer Times',timesSubtitle:'Scheduled times for the five daily prayers',nextPrayer:'Next prayer',prayerTimesManaged:'Times set by mosque administration',
    searchMosques:'Search by mosque name or area',searchPlaceholder:'Mosque name or area',searchButton:'Search',noticesSubtitle:'Mosque announcements and important information',
    settingsSubtitle:'Customize your app preferences',appearance:'Appearance',appearanceDesc:'Choose dark or light mode',light:'Light',dark:'Dark',
    language:'Language',languageDesc:'Change the app language',bangla:'বাংলা',english:'English',prayerManagement:'Prayer Management',
    prayerManagementDesc:'Choose which prayers appear in the Prayer Times section.',jumuah:'Jumu’ah Prayer',jumuahDesc:'Show Jumu’ah in the prayer list when enabled',
    showJumuah:'Show Jumu’ah prayer',adminNote:'Prayer times are set by mosque administrators. This management feature will be connected later.',
    aboutTitle:'Salat — Mosque Prayer Management',aboutText:'A clean, user-friendly app for viewing mosque-set prayer times, announcements, and essential information.',
    contactSubtitle:'Contact information for the mosque administration',contactTitle:'Contact information',contactText:'Phone number, email, and address will be added later through the admin panel.',
    noNotices:'There are no notices right now.',noMosques:'No mosque found with that name. Try another name or area.',primaryMosque:'Main mosque',localMosque:'Local mosque',
    fajr:'Fajr',dhuhr:'Dhuhr',asr:'Asr',maghrib:'Maghrib',isha:'Isha',jumuahPrayer:'Jumu’ah Prayer',
    fajrDetail:'Dawn prayer',dhuhrDetail:'Midday prayer',asrDetail:'Afternoon prayer',maghribDetail:'Sunset prayer',ishaDetail:'Night prayer',jumuahDetail:'Friday congregational prayer',
    searchNoResult:'No mosques found.',refreshMessage:'Information refreshed'
  }
};
const getElement = (id) => document.getElementById(id);
const icon = (name, extraClass = '') => '<svg class="svg-icon ' + extraClass + '" aria-hidden="true" focusable="false"><use href="#' + name + '"></use></svg>';
function currentLang(){return document.documentElement.lang === 'en' ? 'en' : 'bn';}
function t(key){return translations[currentLang()][key] || translations.bn[key] || key;}
function translatePage(){
  const lang=currentLang();
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach((el)=>{const key=el.dataset.i18n;if(t(key))el.textContent=t(key);});
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el)=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
  const themeSelect=getElement('themeSelect'), languageSelect=getElement('languageSelect');
  if(themeSelect){themeSelect.options[0].text=t('light');themeSelect.options[1].text=t('dark');}
  if(languageSelect){languageSelect.options[0].text=t('bangla');languageSelect.options[1].text=t('english');}
  renderPrayerTimes();renderMosques(getElement('mosqueSearch')?.value||'');renderNotices();
}
function renderPrayerTimes(){
  const list=getElement('prayerList');
  if(!list)return;
  const entries=prayerData.map(p=>({...p,name:t(p.key),detail:t(p.key+'Detail')}));
  if(getElement('jumuahToggle')?.checked) entries.push({...jumuahData,name:t('jumuahPrayer'),detail:t('jumuahDetail')});
  list.innerHTML=entries.map((prayer)=>'<article class="prayer-card"><div class="prayer-icon">'+icon(prayer.icon)+'</div><div class="prayer-info"><h3>'+prayer.name+'</h3><p>'+prayer.english+' · '+prayer.detail+'</p></div><div class="prayer-time">'+prayer.time+'</div></article>').join('');
}
function renderMosques(query=''){
  const normalizedQuery=query.trim().toLocaleLowerCase(currentLang());
  const filtered=mosqueData.filter(m=>(m.name+' '+m.area).toLocaleLowerCase(currentLang()).includes(normalizedQuery));
  const results=getElement('mosqueResults');if(!results)return;
  if(!filtered.length){results.innerHTML='<div class="empty-state">'+t('noMosques')+'</div>';return;}
  results.innerHTML=filtered.map(m=>'<article class="item-card"><div class="item-icon">'+icon('i-mosque')+'</div><div class="item-main"><h3>'+m.name+'</h3><p>'+icon('i-pin','inline-icon')+' '+m.area+'</p></div><span class="item-meta">'+(m.label==='প্রধান মসজিদ'?t('primaryMosque'):t('localMosque'))+'</span></article>').join('');
}
function renderNotices(){
  const target=getElement('noticeResults');if(!target)return;
  if(!noticeData.length){target.innerHTML='<div class="empty-state">'+t('noNotices')+'</div>';return;}
  target.innerHTML=noticeData.map(n=>'<article class="item-card notice-card"><div class="item-icon">'+icon('i-bell')+'</div><div class="item-main"><h3>'+n.title+'</h3><time>'+n.date+'</time><p class="notice-body">'+n.body+'</p></div></article>').join('');
}
function showPage(pageId){
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===pageId));
  document.querySelectorAll('[data-page]').forEach(b=>{const selected=b.dataset.page===pageId;b.classList.toggle('active',selected);if(selected)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  if(pageId==='timesPage')renderPrayerTimes();
}
function applyTheme(theme){
  document.documentElement.dataset.theme=theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#101a17':'#075e50');
  const selector=getElement('themeSelect');if(selector)selector.value=theme;
}
getElement('themeSelect')?.addEventListener('change',e=>{applyTheme(e.target.value);try{localStorage.setItem('salat-theme',e.target.value);}catch(_){}});
getElement('languageSelect')?.addEventListener('change',e=>{document.documentElement.lang=e.target.value;try{localStorage.setItem('salat-language',e.target.value);}catch(_){}translatePage();});
getElement('jumuahToggle')?.addEventListener('change',e=>{try{localStorage.setItem('salat-show-jumuah',String(e.target.checked));}catch(_){}renderPrayerTimes();});
document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>showPage(button.dataset.page)));
document.querySelector('[data-home-link]')?.addEventListener('click',e=>{e.preventDefault();showPage('timesPage');});
getElement('mosqueSearchForm')?.addEventListener('submit',e=>{e.preventDefault();renderMosques(getElement('mosqueSearch').value);});
getElement('refreshButton')?.remove();
let savedTheme='light',savedLanguage='bn',savedJumuah=false;
try{savedTheme=localStorage.getItem('salat-theme')||'light';savedLanguage=localStorage.getItem('salat-language')||'bn';savedJumuah=localStorage.getItem('salat-show-jumuah')==='true';}catch(_){}
if(!['light','dark'].includes(savedTheme))savedTheme='light';
if(!['bn','en'].includes(savedLanguage))savedLanguage='bn';
if(getElement('jumuahToggle'))getElement('jumuahToggle').checked=savedJumuah;
document.documentElement.lang=savedLanguage;
applyTheme(savedTheme);
translatePage();
showPage('timesPage');
