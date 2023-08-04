document.addEventListener('DOMContentLoaded', function(){
    
    const allNavItems = document.querySelectorAll('.nav-link'
    )  
    const navList = document.querySelector('.navbar-collapse')


    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))


    
})
const footerYear = document.querySelector('.footer__year');


const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();



const translations = {
    pl: {
      navHome: "Home",
      navBrands: "Nasze Marki",
      navAbout: "O Nas",
      navCategories: "Kategorie",
      navContact: "Kontakt",
      navLanguage: "Język",

      homeDescription: "Największe marki modowe na świecie",
      homeButton: "Poznaj nas",

      brandsTitle: "Nasze marki",
      brandsText: "Tysiące różnych znanych marek",

      aboutTitle: "O nas",
      aboutText1: "SS Trade to firma dystrybuująca, która skupia się na modzie, znanych markach lifestylowych, sportowych i kulturze ulicznej. Specjalizujmy się w dostarczaniu wysokiej jakości odzieży i obuwia. Aktualnie znajdziesz u nas tysiące produktów, dodatków i wyszukanych akcesoriów, a wśród nich rzeczy takich marek jak: Levis, The North Face, Vans. Oferujemy sneakersy, sprawdzone klasyki czy najnowsze modele butów od NIKE, Jordan Brand, Adidas i innych.",
      aboutText2: "Mamy szeroką gamę produktów w swoim portfolio, które obejmują zarówno odzież damską, męską jak i produkty dla dzieci. Nasza oferta zawiera różnorodne kategorie produktów: sportowe, casualowe, eleganckie, denimowe i wiele innych.",
      aboutText3: "Mamy również silne zobowiązanie do obsługi klienta. Nasz zespół handlowców jest zawsze gotowy do udzielenia pomocy i doradztwa w zakresie wyboru produktów, dostępności i wszelkich innych kwestii związanych z zamówieniami. Wśród naszych klientów znajdują się zarówno wielkie międzynarodowe sieci handlowe jaki i mniejsze prywatne firmy. Dzięki profesjonalnemu podejściu i wysokiej jakości obsługi SS Trade buduje długotrwałe relacje z klientami.",
      aboutText4: "Ważnym aspektem działalności SS Trade jest także dbałość o terminowe dostawy. Zdajemy sobie sprawę z istotności czasu i dokładamy wszelkich starań, aby zamówienia były realizowane zgodnie z oczekiwaniami klientów.",
      aboutText5: "SS Trade to silny partner biznesowym w branży odzieżo-obuwniczej. Stale rozwijamy swoje usługi, aby sprostać zmieniającym się potrzebom naszych klientów. Zaangażowanie w wysoką jakość produktów, profesjonalną obsługę klienta i terminowe dostawy czyni nas zaufanym partnerem dla sklepów detalicznych, które poszukują hurtowych dostawców odzieży znanych marek.",
      aboutTime: "Czas",
      aboutSupport: "Pomoc",

      categoriesTitle: "Kategorie",
        categoriesCard1: "Obuwie",
        categoriesText1: "Sneakersy, sprawdzone klasyki czy najnowsze modele butów.",
        categoriesCard2: "Akcesoria",
        categoriesText2: "Tysiące produktów, dodatków i wyszukanych akcesoriów.",
        categoriesCard3: "Odzież",
        categoriesText3: "Sportowe, casualowe, eleganckie, denimowe i wiele innych.",

        contactTitle: "Kontakt",
        
    description: "Największe marki modowe na świecie, najlepsza, oryginalna kolekcja marek, buty, odzież, akcesoria",
    keywords: "Marki, Nike, Levis, Lacoste, Kappa, ECCO, Cross Jeans, Champion, Caterpillar, Big star, Adidas, 4f, Vans, Under Arrmour, The north face, Saucony, Salomon, Puma, Sklep"
    },
    en: {
        navHome: "Home",
        navBrands: "Our Brands",
        navAbout: "About Us",
        navCategories: "Categories",
        navContact: "Contact",
        navLanguage: "Language",

        homeDescription: "The biggest fashion brands in the world",
        homeButton: "Meet us",

        brandsTitle: "Our Brands",
        brandsText: "Thousands of different well-known brands",

        aboutTitle: "About us",
        aboutText1: "SS Trade is a distribution company that focuses on fashion, well-known lifestyle, sportswear, and street culture brands. We specialize in delivering high-quality clothing and footwear. Currently, you can find thousands of products, accessories, and curated items from brands such as Levis, The North Face, and Vans. We offer sneakers, tried-and-true classics, as well as the latest shoe models from NIKE, Jordan Brand, Adidas, and others.",
        aboutText2: "Our portfolio encompasses a wide range of products, including women's, men's, and children's clothing. Our offerings span diverse categories, including sports, casual, elegant, denim, and more.",
        aboutText3: "We are committed to providing excellent customer service. Our sales team is always ready to assist and provide advice regarding product selection, availability, and any other order-related queries. Our clientele includes both major international retail chains and smaller private companies. Through our professional approach and top-notch service, SS Trade builds lasting relationships with its customers.",
        aboutText4: "Timely deliveries are also a crucial aspect of SS Trade's operations. We understand the importance of time and make every effort to ensure that orders are fulfilled according to our customers' expectations.",
        aboutText5: "SS Trade is a strong business partner in the clothing and footwear industry. We continuously develop our services to meet the evolving needs of our clients. Our dedication to high-quality products, professional customer support, and on-time deliveries make us a trusted partner for retail stores seeking wholesale suppliers of branded clothing.",
        aboutTime: "Time",
        aboutSupport: "Support",

        categoriesTitle: "Categories",
        categoriesCard1: "FOOTWEAR",
        categoriesText1: "Sneakers, tried-and-true classics, as well as the latest shoe models.",
        categoriesCard2: "Accessories",
        categoriesText2: "thousands of products, accessories, and curated items.",
        categoriesCard3: "Apparel",
        categoriesText3: "Sports, casual, elegant, denim, and more.",

        contactTitle: "Contact us",

        description: "The biggest fashion brands in the world, the best, original brands collection, shoes, apparel, accesories",
    keywords: "Brands, Nike, Levis, Lacoste, Kappa, ECCO, Cross Jeans, Champion, Caterpillar, Big star, Adidas, 4f, Vans, Under Arrmour, The north face, Saucony, Salomon, Puma, Shop"
    },
  };

  function setLanguage(language) {
    document.documentElement.lang = language;

    const description = document.querySelector('meta[name="description"]');
    description.setAttribute("content", translations[language]["description"]);

    const keywords = document.querySelector('meta[name="keywords"]');
    keywords.setAttribute("content", translations[language]["keywords"]);

    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    for (const element of elementsToTranslate) {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    }
}