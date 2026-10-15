# Salat Time Management System — Public Web App

মোবাইল-ফার্স্ট নামাজের সময়, নিকটবর্তী মসজিদ এবং বিজ্ঞপ্তির প্রাথমিক UI।

## বর্তমান সংস্করণ
- ৩টি bottom tab: নামাজের সময়, নিকটবর্তী মসজিদ, বিজ্ঞপ্তি
- পাঁচ ওয়াক্তের প্রিমিয়াম কার্ড UI
- মসজিদের নাম, ইউনিয়ন, উপজেলা, জেলা
- মসজিদ তালিকায় সার্চ
- Solaiman Lipi font-এর জন্য @font-face CDN সেটআপ
- মোবাইল ও ডেস্কটপ responsive layout

## গুরুত্বপূর্ণ
বর্তমান সময়সূচি, মসজিদ ও বিজ্ঞপ্তি **ডেমো ডেটা**। এখনো কোনো Admin Panel, database, live location, বা API যুক্ত নেই। পরবর্তী ধাপে Admin Panel/API যুক্ত করে ডেমো ডেটা বদলাতে হবে। Solaiman Lipi CDN লোড না হলে CSS-এর fallback font ব্যবহার হবে; নির্ভরযোগ্য production ব্যবহারের জন্য ফন্ট ফাইল `public/fonts/`-এ রেখে `@font-face`-এর URL স্থানীয় ফাইলে পরিবর্তন করা ভালো।

## চালানো
`index.html` সরাসরি ব্রাউজারে খুলুন, অথবা GitHub Pages-এ প্রকাশ করুন।
