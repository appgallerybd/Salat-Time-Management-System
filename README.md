# সালাত — Salat Time Management System

মোবাইল-ফার্স্ট বাংলা ওয়েব অ্যাপের প্রাথমিক UI। HTML, CSS ও JavaScript আলাদা ফাইলে রাখা হয়েছে।

## ফাইল কাঠামো
- `index.html` — semantic HTML, navigation এবং inline SVG symbol definitions
- `assets/css/style.css` — premium responsive theme ও Solaiman Lipi font setup
- `assets/js/app.js` — prayer cards, mosque search, notices এবং bottom navigation
- `assets/icons/icons.svg` — SVG icon library/reference asset

## কী কাজ করে
- নামাজের সময়, নিকটবর্তী মসজিদ এবং বিজ্ঞপ্তি—তিনটি bottom tab
- পাঁচ ওয়াক্তের responsive cards
- নমুনা মসজিদের নাম/এলাকা দিয়ে সার্চ
- responsive layout, keyboard focus states এবং reduced-motion support
- SVG icons inline symbol হিসেবে embed করা, যাতে external SVG `use`-এর browser/CORS সমস্যা না হয়

## গুরুত্বপূর্ণ সীমাবদ্ধতা
নামাজের সময়, মসজিদ ও বিজ্ঞপ্তি এখনও hard-coded ডেমো ডেটা। প্রকৃত সময়সূচি, location/distance, admin panel, authentication, database বা API এখনও সংযুক্ত নয়। লাইভ ব্যবহারের আগে সঠিক ডেটা এবং backend সংযুক্ত করা আবশ্যক।

Solaiman Lipi বর্তমানে CDN থেকে লোড হয়; অফলাইন বা নির্ভরযোগ্য production ব্যবহারের জন্য অনুমোদিত ফন্ট ফাইল স্থানীয়ভাবে সংরক্ষণ করে CSS-এ তার path দিন।

## চালানো
GitHub Pages-এ root folder প্রকাশ করুন, অথবা `index.html` একটি web server দিয়ে পরিবেশন করুন। SVG symbols HTML-এ inline থাকায় আইকন দেখাতে বাহ্যিক icon CDN দরকার হয় না।
