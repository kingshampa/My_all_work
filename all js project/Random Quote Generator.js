const quotes = [
    // "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    // "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    // "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    // "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    // "In the middle of difficulty lies opportunity. - Albert Einstein",
    // "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "“বিজয়ীরা ভিন্ন কিছু করে না, তারা কোনো কিছুকে ভিন্নভাবে করে।",
    "প্রত্যেককে বিশ্বাস করা বিপদজনক; কিন্তু কাউকে বিশ্বাস না করা আরো বেশী বিপদজনক। -আব্রাহাম লিংকন",
    "ভীরুরা মরার আগে বারে বারে মরে। সাহসীরা মৃত্যুর স্বাদ একবারই গ্রহণ করে। -শেক্সপীয়ার",
    "যে নদীর গভীরতা বেশি, তার বয়ে যাওয়ার শব্দ কম। -জন লিভগেট",
    "প্রেমের আনন্দ থাকে স্বল্পক্ষন কিন্তু বেদনা থাকে সারাটি জীবন। - রবীন্দ্রনাথ ঠাকুর",
    "আমি বিশ্বের সব ইহুদী মারতাম, কিন্তু কিছু ইহুদী বাঁচিয়ে রাখলাম যাতে পুরো বিশ্ব বুঝতে পারে যে কেন আমি তাদের মেরেছি। -হিটলার",
    "যদি তুমি কখনো অপমানিত বোধ কর তবে অপরকে সেটা বুঝতে দেবে না। - জন বেকার",
    "যারা আমাকে সাহায্য করতে মানা করে দিয়েছিল আমি তাদের প্রতি কৃতজ্ঞ। কারন তাদের ‘না’ এর জন্যই আজ আমি নিজের কাজ নিজে করতে শিখেছি। - আইনস্টাইন",
    "বিপদে মোরে রক্ষা করো এ নহে মোর প্রার্থনা। - রবীন্দ্রনাথ ঠাকুর",
    "সব সমস্যার প্রতিকারই হচ্ছে ধৈর্য্য। -হোয়াটলি",
    "চন্দ্রের যা কলঙ্ক সেটা কেবল মুখের উপরে, তার জ্যোৎস্নায় কোনো দাগ পড়ে না। — রবীন্দ্রনাথ ঠাকুর",
    "সফলতা সুখের চাবিকাঠি নয় বরং সুখ হল সফলতার চাবিকাঠি। আপনার কাজকে যদি আপনি মনে প্রানে ভালবাসতে পারেন অর্থাৎ যদি আপনি নিজের কাজ নিয়ে সুখী হন তবে আপনি অবশ্যই সফল হবেন। —আলবার্ট সোয়েটজার",
    "একজন সুন্দর, আকর্ষণীয় রমণীর পাশে ২ ঘণ্টা বসে থাকুন, দেখবেন সময় উড়ে চলে গেছে!! এবার গ্রীষ্মের গরমের মাঝে রাস্তায় ২ মিনিট হাঁটুন, মনে হবে আপনি অনন্তকাল ধরে হাঁটছেন। — আলবার্ট আইনস্টাইন",
    "ছেলেরা ভালোবাসার অভিনয় করতে করতে যে কখন সত্যি সত্যি ভালোবেসে ফেলে তারা তা নিজেও জানেনা … মেয়েরা সত্যিকার ভালোবাসতে বাসতে যে কখন অভিনয় শুরু করে তারা তা নিজেও জানেনা। — সমরেশ মজুমদার"
    



    




    // Add more quotes as needed
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
  }
  