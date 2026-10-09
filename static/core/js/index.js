const searchInput1 = document.querySelector("#search-active");
const menuItems1 = document.querySelectorAll(".card");
const btns  = document.querySelectorAll(".menu-icons")
const allBtn = document.querySelector("#all")

searchInput1.addEventListener("input", () => {
    const searchText = searchInput1.value.toLowerCase();

    allBtn.classList.add("choose")
    
    menuItems1.forEach((item) => {
        const itemText = item.textContent.toLowerCase();

        const matched = itemText.includes(searchText);

        if (matched){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")
        }
    });
},{
    threshold:0.15
});

reveals.forEach((item) => {
    observer.observe(item);
});

const navLinks = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const observer_menu = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            navLinks.classList.add("visited")
        }else{
            navLinks.classList.remove("visited")
        }
    });
});

observer_menu.observe(menu)

// ===============================
// LANGUAGE SYSTEM
// ==============================
// LANGUAGE SYSTEM
// ==============================

const languageOptions = document.querySelectorAll(
    ".language-options button"
  );
  
  const languageCurrent = document.querySelector(".language-current");
  
  const translations = {
    en: {
      // Navigation
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
  
      // Search
      search: "Search menu...",
      noResults: "No results found.",
  
      // Hero
      heroTagline: "GOOD FOOD - GREAT COFFEE - BETTER MOOD",
      cafeName: "CAFE DIAMOND",
      heroTitle: "MENU",
      heroSubtitle: "A menu crafted for every moment.",
  
      // Categories
      all: "All",
      coffee: "Coffee",
      coldDrinks: "Cold Drinks",
      breakfast: "Breakfast",
      main: "Main",
      dessert: "Dessert",
  
      // Products
      espresso: "Espresso",
      espressoDesc: "Rich and bold, our signature espresso blend.",
      espressoPrice: "120,000 Toman",
  
      cappuccino: "Cappuccino",
      cappuccinoDesc: "Espresso with steamed milk and velvety foam.",
      cappuccinoPrice: "180,000 Toman",
  
      latte: "Latte",
      latteDesc: "Smooth espresso with steamed milk.",
      lattePrice: "190,000 Toman",
  
      icedCoffee: "Iced Coffee",
      icedCoffeeDesc: "Chilled coffee for a refreshing experience.",
      icedCoffeePrice: "160,000 Toman",
  
      matchaLatte: "Matcha Latte",
      matchaLatteDesc: "Premium matcha with steamed milk.",
      matchaLattePrice: "120,000 Toman",
  
      hotChocolate: "Hot Chocolate",
      hotChocolateDesc: "Rich chocolate, perfectly balanced.",
      hotChocolatePrice: "170,000 Toman",
  
      classicBreakfast: "Classic Breakfast",
      classicBreakfastDesc: "Eggs, toast, salad and more.",
      classicBreakfastPrice: "470,000 Toman",
  
      avocadoToast: "Avocado Toast",
      avocadoToastDesc: "Fresh avocado, sourdough and herbs.",
      avocadoToastPrice: "380,000 Toman",
  
      croissant: "Croissant",
      croissantDesc: "Buttery and fresh, a classic choice.",
      croissantPrice: "100,000 Toman",
  
      // Footer
      footerCopyright: "2025 Cafe Diamond. All rights reserved.",
      address: "Tehran, Falahpur St, No. 33"
    },
  
    fa: {
      // Navigation
      home: "خانه",
      menu: "منو",
      about: "درباره ما",
      contact: "تماس با ما",
  
      // Search
      search: "جستجوی منو...",
      noResults: "نتیجه‌ای پیدا نشد.",
  
      // Hero
      heroTagline: "غذای خوب - قهوه عالی - حال بهتر",
      cafeName: "کافه دایموند",
      heroTitle: "منو",
      heroSubtitle: "منویی برای تمام لحظه‌ها.",
  
      // Categories
      all: "همه",
      coffee: "قهوه",
      coldDrinks: "نوشیدنی سرد",
      breakfast: "صبحانه",
      main: "غذای اصلی",
      dessert: "دسر",
  
      // Products
      espresso: "اسپرسو",
      espressoDesc: "ترکیبی غنی و قوی از اسپرسوی مخصوص ما.",
      espressoPrice: "۱۲۰,۰۰۰ تومان",
  
      cappuccino: "کاپوچینو",
      cappuccinoDesc: "اسپرسو با شیر بخار داده‌شده و فوم لطیف.",
      cappuccinoPrice: "۱۸۰,۰۰۰ تومان",
  
      latte: "لاته",
      latteDesc: "اسپرسوی نرم همراه با شیر بخار داده‌شده.",
      lattePrice: "۱۹۰,۰۰۰ تومان",
  
      icedCoffee: "آیس کافی",
      icedCoffeeDesc: "قهوه سرد و خنک برای تجربه‌ای دلچسب.",
      icedCoffeePrice: "۱۶۰,۰۰۰ تومان",
  
      matchaLatte: "ماچا لاته",
      matchaLatteDesc: "ماچای ممتاز همراه با شیر بخار داده‌شده.",
      matchaLattePrice: "۱۲۰,۰۰۰ تومان",
  
      hotChocolate: "هات چاکلت",
      hotChocolateDesc: "شکلاتی غنی با طعمی کاملاً متعادل.",
      hotChocolatePrice: "۱۷۰,۰۰۰ تومان",
  
      classicBreakfast: "صبحانه کلاسیک",
      classicBreakfastDesc: "تخم‌مرغ، نان تست، سالاد و موارد دیگر.",
      classicBreakfastPrice: "۴۷۰,۰۰۰ تومان",
  
      avocadoToast: "نست آووکادو",
      avocadoToastDesc: "آووکادوی تازه، نان خمیرترش و سبزیجات معطر.",
      avocadoToastPrice: "۳۸۰,۰۰۰ تومان",
  
      croissant: "کروسان",
      croissantDesc: "تازه و کره‌ای؛ یک انتخاب کلاسیک.",
      croissantPrice: "۱۰۰,۰۰۰ تومان",
  
      // Footer
      footerCopyright: "۲۰۲۵ کافه دایموند. تمامی حقوق محفوظ است.",
      address: "تهران، خیابان فلاح‌پور، پلاک ۳۳"
    }
  };
  
  
  // ==============================
  // CHANGE LANGUAGE
  // ==============================
  
  function changeLanguage(language) {
  
    // Direction
    if (language === "fa") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "fa";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  
  
    // Change normal texts
    const translatableElements = document.querySelectorAll("[data-i18n]");
  
    translatableElements.forEach((element) => {
  
      const key = element.dataset.i18n;
  
      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
  
    });
  
  
    // Change placeholders
    const placeholderElements = document.querySelectorAll(
      "[data-i18n-placeholder]"
    );
  
    placeholderElements.forEach((element) => {
  
      const key = element.dataset.i18nPlaceholder;
  
      if (translations[language][key]) {
        element.placeholder = translations[language][key];
      }
  
    });
  
  
    // Change language button
    if (language === "fa") {
      languageCurrent.textContent = "FA";
    } else {
      languageCurrent.textContent = "EN";
    }
  
  
    // Save selected language
    localStorage.setItem("language", language);
  }
  
  
  // ==============================
  // LANGUAGE BUTTONS
  // ==============================
  
  languageOptions.forEach((button) => {
  
    button.addEventListener("click", () => {
  
      const language = button.textContent
        .trim()
        .toLowerCase();
  
      changeLanguage(language);
  
    });
  
  });
  
  
  // ==============================
  // LOAD SAVED LANGUAGE
  // ==============================
  
  const savedLanguage =
    localStorage.getItem("language") || "en";
  
  changeLanguage(savedLanguage);
  
  
  // ==============================
  // SEARCH SYSTEM
  // ==============================
  
  const searchInput = document.querySelector("#search-active");
  
  const menuItems = document.querySelectorAll(".card");
  
  const noResults = document.querySelector("#no-results");
  
  
  searchInput.addEventListener("input", () => {
  
    const searchText = searchInput.value
      .trim()
      .toLowerCase();
  
    let foundItems = 0;
  
  
    menuItems.forEach((item) => {
  
      const itemText = item.textContent.toLowerCase();
  
      const matched = itemText.includes(searchText);
  
  
      if (matched) {
  
        item.style.display = "";
  
        foundItems++;
  
      } else {
  
        item.style.display = "none";
  
      }
  
    });
  
  
    // Show / hide no results message
    if (foundItems === 0) {
  
      noResults.style.display = "block";
  
    } else {
  
      noResults.style.display = "none";
  
    }
  
  });
  
  
  // ==============================
  // MENU SECTION NAVIGATION
  // ==============================
  
  const menuButton = document.querySelector(".menu-button");
  
  const menuSection = document.querySelector(".menu");
  
  
  const menuObserver = new IntersectionObserver(
    (entries) => {
  
      entries.forEach((entry) => {
  
        if (entry.isIntersecting) {
  
          menuButton.classList.add("visited");
  
        } else {
  
          menuButton.classList.remove("visited");
  
        }
  
      });
  
    },
    {
      threshold: 0.2
    }
  );
  
  
  menuObserver.observe(menuSection);

const filterButtons = document.querySelectorAll("[data-filter]")
const menuCards = document.querySelectorAll(".card")
filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault()

    const filter_menu = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("choose")
    });

    button.classList.add("choose")

    menuCards.forEach((card) => {
      const category = card.dataset.category;;

      if(filter_menu === "all" | category === filter_menu){
        card.style.display = "flex";
      }else{
        card.style.display = "none";
      }
    });
  });
});

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {

    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

});