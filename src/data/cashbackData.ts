export interface Store {
  name: string
  cashback: string
  logo: string
}

export interface Category {
  id: string
  name: string
  emoji: string
  stores: Store[]
}

export interface Bank {
  id: string
  name: string
  logo: string
  color: string
  categories: Category[]
}

export const banks: Bank[] = [
  {
    id: "alfa",
    name: "Альфа-Банк",
    logo: "https://logo.clearbit.com/alfabank.ru",
    color: "#EF3124",
    categories: [
      {
        id: "food",
        name: "Еда и рестораны",
        emoji: "🍔",
        stores: [
          { name: "Яндекс Еда", cashback: "10%", logo: "https://logo.clearbit.com/eda.yandex.ru" },
          { name: "Delivery Club", cashback: "7%", logo: "https://logo.clearbit.com/deliveryclub.ru" },
          { name: "Вкусно и точка", cashback: "5%", logo: "https://logo.clearbit.com/mcdonalds.com" },
          { name: "KFC", cashback: "5%", logo: "https://logo.clearbit.com/kfc.ru" },
        ],
      },
      {
        id: "supermarket",
        name: "Супермаркеты",
        emoji: "🛒",
        stores: [
          { name: "Пятёрочка", cashback: "3%", logo: "https://logo.clearbit.com/pyaterochka.ru" },
          { name: "Перекрёсток", cashback: "3%", logo: "https://logo.clearbit.com/perekrestok.ru" },
          { name: "ВкусВилл", cashback: "2%", logo: "https://logo.clearbit.com/vkusvill.ru" },
        ],
      },
      {
        id: "travel",
        name: "Путешествия",
        emoji: "✈️",
        stores: [
          { name: "Aviasales", cashback: "3%", logo: "https://logo.clearbit.com/aviasales.ru" },
          { name: "Booking.com", cashback: "5%", logo: "https://logo.clearbit.com/booking.com" },
          { name: "РЖД", cashback: "4%", logo: "https://logo.clearbit.com/rzd.ru" },
        ],
      },
      {
        id: "clothes",
        name: "Одежда и обувь",
        emoji: "👗",
        stores: [
          { name: "Wildberries", cashback: "5%", logo: "https://logo.clearbit.com/wildberries.ru" },
          { name: "OZON", cashback: "5%", logo: "https://logo.clearbit.com/ozon.ru" },
          { name: "Lamoda", cashback: "6%", logo: "https://logo.clearbit.com/lamoda.ru" },
        ],
      },
      {
        id: "beauty",
        name: "Красота и здоровье",
        emoji: "💅",
        stores: [
          { name: "Золотое Яблоко", cashback: "8%", logo: "https://logo.clearbit.com/goldapple.ru" },
          { name: "Л'Этуаль", cashback: "5%", logo: "https://logo.clearbit.com/letu.ru" },
          { name: "Аптека Горздрав", cashback: "4%", logo: "https://logo.clearbit.com/gorzdrav.org" },
        ],
      },
      {
        id: "tech",
        name: "Электроника",
        emoji: "📱",
        stores: [
          { name: "DNS", cashback: "3%", logo: "https://logo.clearbit.com/dns-shop.ru" },
          { name: "М.Видео", cashback: "4%", logo: "https://logo.clearbit.com/mvideo.ru" },
          { name: "Эльдорадо", cashback: "3%", logo: "https://logo.clearbit.com/eldorado.ru" },
        ],
      },
      {
        id: "taxi",
        name: "Такси и транспорт",
        emoji: "🚕",
        stores: [
          { name: "Яндекс Такси", cashback: "10%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Ситимобил", cashback: "7%", logo: "https://logo.clearbit.com/citymobil.ru" },
          { name: "Uber", cashback: "5%", logo: "https://logo.clearbit.com/uber.com" },
        ],
      },
      {
        id: "entertainment",
        name: "Развлечения",
        emoji: "🎬",
        stores: [
          { name: "Кинопоиск", cashback: "5%", logo: "https://logo.clearbit.com/kinopoisk.ru" },
          { name: "Афиша", cashback: "3%", logo: "https://logo.clearbit.com/afisha.ru" },
          { name: "Ticketland", cashback: "4%", logo: "https://logo.clearbit.com/ticketland.ru" },
        ],
      },
      {
        id: "sport",
        name: "Спорт",
        emoji: "🏋️",
        stores: [
          { name: "Спортмастер", cashback: "5%", logo: "https://logo.clearbit.com/sportmaster.ru" },
          { name: "Decathlon", cashback: "4%", logo: "https://logo.clearbit.com/decathlon.ru" },
          { name: "Nike", cashback: "6%", logo: "https://logo.clearbit.com/nike.com" },
        ],
      },
      {
        id: "kids",
        name: "Дети и игрушки",
        emoji: "🧸",
        stores: [
          { name: "Детский мир", cashback: "5%", logo: "https://logo.clearbit.com/detmir.ru" },
          { name: "Кораблик", cashback: "4%", logo: "https://logo.clearbit.com/korablik.ru" },
          { name: "Lego", cashback: "3%", logo: "https://logo.clearbit.com/lego.com" },
        ],
      },
    ],
  },
  {
    id: "ibank",
    name: "И Банк",
    logo: "https://logo.clearbit.com/ibank.ru",
    color: "#7C3AED",
    categories: [
      {
        id: "food",
        name: "Еда и рестораны",
        emoji: "🍔",
        stores: [
          { name: "Яндекс Еда", cashback: "8%", logo: "https://logo.clearbit.com/eda.yandex.ru" },
          { name: "Burger King", cashback: "6%", logo: "https://logo.clearbit.com/burgerking.ru" },
          { name: "Суши Wok", cashback: "7%", logo: "https://logo.clearbit.com/sushiwok.ru" },
        ],
      },
      {
        id: "supermarket",
        name: "Супермаркеты",
        emoji: "🛒",
        stores: [
          { name: "Магнит", cashback: "4%", logo: "https://logo.clearbit.com/magnit.ru" },
          { name: "Лента", cashback: "3%", logo: "https://logo.clearbit.com/lenta.com" },
          { name: "Ашан", cashback: "2%", logo: "https://logo.clearbit.com/auchan.ru" },
        ],
      },
      {
        id: "travel",
        name: "Путешествия",
        emoji: "✈️",
        stores: [
          { name: "Tutu.ru", cashback: "4%", logo: "https://logo.clearbit.com/tutu.ru" },
          { name: "OneTwoTrip", cashback: "5%", logo: "https://logo.clearbit.com/onetwotrip.com" },
          { name: "Ostrovok", cashback: "6%", logo: "https://logo.clearbit.com/ostrovok.ru" },
        ],
      },
      {
        id: "clothes",
        name: "Одежда и обувь",
        emoji: "👗",
        stores: [
          { name: "Zara", cashback: "5%", logo: "https://logo.clearbit.com/zara.com" },
          { name: "H&M", cashback: "4%", logo: "https://logo.clearbit.com/hm.com" },
          { name: "Befree", cashback: "6%", logo: "https://logo.clearbit.com/befree.ru" },
        ],
      },
      {
        id: "beauty",
        name: "Красота и здоровье",
        emoji: "💅",
        stores: [
          { name: "Рив Гош", cashback: "6%", logo: "https://logo.clearbit.com/rivegauche.ru" },
          { name: "Douglas", cashback: "5%", logo: "https://logo.clearbit.com/douglas.ru" },
          { name: "СберАптека", cashback: "4%", logo: "https://logo.clearbit.com/eapteka.ru" },
        ],
      },
      {
        id: "tech",
        name: "Электроника",
        emoji: "📱",
        stores: [
          { name: "Apple", cashback: "3%", logo: "https://logo.clearbit.com/apple.com" },
          { name: "Samsung", cashback: "4%", logo: "https://logo.clearbit.com/samsung.com" },
          { name: "Citilink", cashback: "3%", logo: "https://logo.clearbit.com/citilink.ru" },
        ],
      },
      {
        id: "taxi",
        name: "Такси и транспорт",
        emoji: "🚕",
        stores: [
          { name: "Яндекс Go", cashback: "8%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "BlaBlaCar", cashback: "5%", logo: "https://logo.clearbit.com/blablacar.ru" },
          { name: "СберМобайл", cashback: "4%", logo: "https://logo.clearbit.com/sbermobile.ru" },
        ],
      },
      {
        id: "entertainment",
        name: "Развлечения",
        emoji: "🎬",
        stores: [
          { name: "IVI", cashback: "8%", logo: "https://logo.clearbit.com/ivi.ru" },
          { name: "Okko", cashback: "6%", logo: "https://logo.clearbit.com/okko.tv" },
          { name: "START", cashback: "5%", logo: "https://logo.clearbit.com/start.ru" },
        ],
      },
      {
        id: "sport",
        name: "Спорт",
        emoji: "🏋️",
        stores: [
          { name: "Adidas", cashback: "6%", logo: "https://logo.clearbit.com/adidas.ru" },
          { name: "Puma", cashback: "5%", logo: "https://logo.clearbit.com/puma.com" },
          { name: "Спортмастер", cashback: "4%", logo: "https://logo.clearbit.com/sportmaster.ru" },
        ],
      },
      {
        id: "kids",
        name: "Дети и игрушки",
        emoji: "🧸",
        stores: [
          { name: "Детский мир", cashback: "6%", logo: "https://logo.clearbit.com/detmir.ru" },
          { name: "Hamleys", cashback: "5%", logo: "https://logo.clearbit.com/hamleys.com" },
          { name: "Chicco", cashback: "4%", logo: "https://logo.clearbit.com/chicco.ru" },
        ],
      },
    ],
  },
  {
    id: "sber",
    name: "Сбер",
    logo: "https://logo.clearbit.com/sber.ru",
    color: "#21A038",
    categories: [
      {
        id: "food",
        name: "Еда и рестораны",
        emoji: "🍔",
        stores: [
          { name: "СберМаркет", cashback: "10%", logo: "https://logo.clearbit.com/sbermarket.ru" },
          { name: "Delivery Club", cashback: "5%", logo: "https://logo.clearbit.com/deliveryclub.ru" },
          { name: "Domino's", cashback: "6%", logo: "https://logo.clearbit.com/dominos.ru" },
        ],
      },
      {
        id: "supermarket",
        name: "Супермаркеты",
        emoji: "🛒",
        stores: [
          { name: "Пятёрочка", cashback: "5%", logo: "https://logo.clearbit.com/pyaterochka.ru" },
          { name: "Магнит", cashback: "4%", logo: "https://logo.clearbit.com/magnit.ru" },
          { name: "Окей", cashback: "3%", logo: "https://logo.clearbit.com/okmarket.ru" },
        ],
      },
      {
        id: "travel",
        name: "Путешествия",
        emoji: "✈️",
        stores: [
          { name: "Сбертревел", cashback: "10%", logo: "https://logo.clearbit.com/sberbank.ru" },
          { name: "Аэрофлот", cashback: "5%", logo: "https://logo.clearbit.com/aeroflot.ru" },
          { name: "РЖД", cashback: "5%", logo: "https://logo.clearbit.com/rzd.ru" },
        ],
      },
      {
        id: "clothes",
        name: "Одежда и обувь",
        emoji: "👗",
        stores: [
          { name: "Wildberries", cashback: "6%", logo: "https://logo.clearbit.com/wildberries.ru" },
          { name: "OZON", cashback: "6%", logo: "https://logo.clearbit.com/ozon.ru" },
          { name: "Gloria Jeans", cashback: "5%", logo: "https://logo.clearbit.com/gloriajeans.ru" },
        ],
      },
      {
        id: "beauty",
        name: "Красота и здоровье",
        emoji: "💅",
        stores: [
          { name: "Аптека.ру", cashback: "6%", logo: "https://logo.clearbit.com/apteka.ru" },
          { name: "Золотое Яблоко", cashback: "7%", logo: "https://logo.clearbit.com/goldapple.ru" },
          { name: "Ноготочки", cashback: "5%", logo: "https://logo.clearbit.com/nogotochki.ru" },
        ],
      },
      {
        id: "tech",
        name: "Электроника",
        emoji: "📱",
        stores: [
          { name: "СберМегаМаркет", cashback: "8%", logo: "https://logo.clearbit.com/megamarket.ru" },
          { name: "М.Видео", cashback: "5%", logo: "https://logo.clearbit.com/mvideo.ru" },
          { name: "DNS", cashback: "4%", logo: "https://logo.clearbit.com/dns-shop.ru" },
        ],
      },
      {
        id: "taxi",
        name: "Такси и транспорт",
        emoji: "🚕",
        stores: [
          { name: "Яндекс Такси", cashback: "7%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Ситимобил", cashback: "8%", logo: "https://logo.clearbit.com/citymobil.ru" },
          { name: "Whoosh", cashback: "5%", logo: "https://logo.clearbit.com/whoosh.bike" },
        ],
      },
      {
        id: "entertainment",
        name: "Развлечения",
        emoji: "🎬",
        stores: [
          { name: "Кинопоиск", cashback: "10%", logo: "https://logo.clearbit.com/kinopoisk.ru" },
          { name: "Сбер Звук", cashback: "8%", logo: "https://logo.clearbit.com/sber.ru" },
          { name: "Rambler Кино", cashback: "5%", logo: "https://logo.clearbit.com/rambler.ru" },
        ],
      },
      {
        id: "sport",
        name: "Спорт",
        emoji: "🏋️",
        stores: [
          { name: "Спортмастер", cashback: "6%", logo: "https://logo.clearbit.com/sportmaster.ru" },
          { name: "Adidas", cashback: "5%", logo: "https://logo.clearbit.com/adidas.ru" },
          { name: "Планета Фитнес", cashback: "4%", logo: "https://logo.clearbit.com/planetafitness.ru" },
        ],
      },
      {
        id: "kids",
        name: "Дети и игрушки",
        emoji: "🧸",
        stores: [
          { name: "Детский мир", cashback: "7%", logo: "https://logo.clearbit.com/detmir.ru" },
          { name: "KidZania", cashback: "5%", logo: "https://logo.clearbit.com/kidzania.ru" },
          { name: "ToysRUs", cashback: "4%", logo: "https://logo.clearbit.com/toysrus.com" },
        ],
      },
    ],
  },
  {
    id: "vtb",
    name: "ВТБ",
    logo: "https://logo.clearbit.com/vtb.ru",
    color: "#009FDF",
    categories: [
      {
        id: "food",
        name: "Еда и рестораны",
        emoji: "🍔",
        stores: [
          { name: "Яндекс Еда", cashback: "9%", logo: "https://logo.clearbit.com/eda.yandex.ru" },
          { name: "Subway", cashback: "7%", logo: "https://logo.clearbit.com/subway.com" },
          { name: "Росинтер", cashback: "6%", logo: "https://logo.clearbit.com/rosinter.ru" },
        ],
      },
      {
        id: "supermarket",
        name: "Супермаркеты",
        emoji: "🛒",
        stores: [
          { name: "Перекрёсток", cashback: "4%", logo: "https://logo.clearbit.com/perekrestok.ru" },
          { name: "Карусель", cashback: "3%", logo: "https://logo.clearbit.com/karusel.ru" },
          { name: "ВкусВилл", cashback: "3%", logo: "https://logo.clearbit.com/vkusvill.ru" },
        ],
      },
      {
        id: "travel",
        name: "Путешествия",
        emoji: "✈️",
        stores: [
          { name: "Мир Путешествий", cashback: "8%", logo: "https://logo.clearbit.com/vtb.ru" },
          { name: "S7", cashback: "5%", logo: "https://logo.clearbit.com/s7.ru" },
          { name: "Тинькофф Путешествия", cashback: "4%", logo: "https://logo.clearbit.com/tinkoff.ru" },
        ],
      },
      {
        id: "clothes",
        name: "Одежда и обувь",
        emoji: "👗",
        stores: [
          { name: "OZON", cashback: "7%", logo: "https://logo.clearbit.com/ozon.ru" },
          { name: "Rendez-Vous", cashback: "5%", logo: "https://logo.clearbit.com/rendez-vous.ru" },
          { name: "Kari", cashback: "4%", logo: "https://logo.clearbit.com/kari.com" },
        ],
      },
      {
        id: "beauty",
        name: "Красота и здоровье",
        emoji: "💅",
        stores: [
          { name: "Л'Этуаль", cashback: "6%", logo: "https://logo.clearbit.com/letu.ru" },
          { name: "Medsi", cashback: "5%", logo: "https://logo.clearbit.com/medsi.ru" },
          { name: "36.6", cashback: "4%", logo: "https://logo.clearbit.com/366.ru" },
        ],
      },
      {
        id: "tech",
        name: "Электроника",
        emoji: "📱",
        stores: [
          { name: "М.Видео", cashback: "6%", logo: "https://logo.clearbit.com/mvideo.ru" },
          { name: "Эльдорадо", cashback: "5%", logo: "https://logo.clearbit.com/eldorado.ru" },
          { name: "Связной", cashback: "4%", logo: "https://logo.clearbit.com/svyaznoy.ru" },
        ],
      },
      {
        id: "taxi",
        name: "Такси и транспорт",
        emoji: "🚕",
        stores: [
          { name: "Uber", cashback: "8%", logo: "https://logo.clearbit.com/uber.com" },
          { name: "Яндекс Такси", cashback: "6%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Делимобиль", cashback: "5%", logo: "https://logo.clearbit.com/delimobil.ru" },
        ],
      },
      {
        id: "entertainment",
        name: "Развлечения",
        emoji: "🎬",
        stores: [
          { name: "Okko", cashback: "8%", logo: "https://logo.clearbit.com/okko.tv" },
          { name: "ЛитРес", cashback: "6%", logo: "https://logo.clearbit.com/litres.ru" },
          { name: "2ГИС", cashback: "4%", logo: "https://logo.clearbit.com/2gis.ru" },
        ],
      },
      {
        id: "sport",
        name: "Спорт",
        emoji: "🏋️",
        stores: [
          { name: "Decathlon", cashback: "6%", logo: "https://logo.clearbit.com/decathlon.ru" },
          { name: "Reebok", cashback: "5%", logo: "https://logo.clearbit.com/reebok.ru" },
          { name: "World Class", cashback: "4%", logo: "https://logo.clearbit.com/worldclass.ru" },
        ],
      },
      {
        id: "kids",
        name: "Дети и игрушки",
        emoji: "🧸",
        stores: [
          { name: "Детский мир", cashback: "6%", logo: "https://logo.clearbit.com/detmir.ru" },
          { name: "Mothercare", cashback: "5%", logo: "https://logo.clearbit.com/mothercare.com" },
          { name: "Fisher-Price", cashback: "4%", logo: "https://logo.clearbit.com/fisher-price.com" },
        ],
      },
    ],
  },
  {
    id: "yandex",
    name: "Яндекс Банк",
    logo: "https://logo.clearbit.com/yandex.ru",
    color: "#FC3F1D",
    categories: [
      {
        id: "food",
        name: "Еда и рестораны",
        emoji: "🍔",
        stores: [
          { name: "Яндекс Еда", cashback: "15%", logo: "https://logo.clearbit.com/eda.yandex.ru" },
          { name: "Лавка", cashback: "12%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Самокат", cashback: "8%", logo: "https://logo.clearbit.com/samokat.ru" },
        ],
      },
      {
        id: "supermarket",
        name: "Супермаркеты",
        emoji: "🛒",
        stores: [
          { name: "Яндекс Маркет", cashback: "10%", logo: "https://logo.clearbit.com/market.yandex.ru" },
          { name: "Пятёрочка", cashback: "4%", logo: "https://logo.clearbit.com/pyaterochka.ru" },
          { name: "Магнит", cashback: "3%", logo: "https://logo.clearbit.com/magnit.ru" },
        ],
      },
      {
        id: "travel",
        name: "Путешествия",
        emoji: "✈️",
        stores: [
          { name: "Яндекс Путешествия", cashback: "12%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Яндекс Отели", cashback: "10%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Aviasales", cashback: "5%", logo: "https://logo.clearbit.com/aviasales.ru" },
        ],
      },
      {
        id: "clothes",
        name: "Одежда и обувь",
        emoji: "👗",
        stores: [
          { name: "Яндекс Маркет", cashback: "10%", logo: "https://logo.clearbit.com/market.yandex.ru" },
          { name: "Wildberries", cashback: "5%", logo: "https://logo.clearbit.com/wildberries.ru" },
          { name: "OZON", cashback: "5%", logo: "https://logo.clearbit.com/ozon.ru" },
        ],
      },
      {
        id: "beauty",
        name: "Красота и здоровье",
        emoji: "💅",
        stores: [
          { name: "Яндекс Аптека", cashback: "10%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Золотое Яблоко", cashback: "6%", logo: "https://logo.clearbit.com/goldapple.ru" },
          { name: "Л'Этуаль", cashback: "5%", logo: "https://logo.clearbit.com/letu.ru" },
        ],
      },
      {
        id: "tech",
        name: "Электроника",
        emoji: "📱",
        stores: [
          { name: "Яндекс Маркет", cashback: "12%", logo: "https://logo.clearbit.com/market.yandex.ru" },
          { name: "DNS", cashback: "4%", logo: "https://logo.clearbit.com/dns-shop.ru" },
          { name: "М.Видео", cashback: "4%", logo: "https://logo.clearbit.com/mvideo.ru" },
        ],
      },
      {
        id: "taxi",
        name: "Такси и транспорт",
        emoji: "🚕",
        stores: [
          { name: "Яндекс Такси", cashback: "15%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Яндекс Go", cashback: "15%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "Яндекс Самокаты", cashback: "10%", logo: "https://logo.clearbit.com/yandex.ru" },
        ],
      },
      {
        id: "entertainment",
        name: "Развлечения",
        emoji: "🎬",
        stores: [
          { name: "Кинопоиск", cashback: "15%", logo: "https://logo.clearbit.com/kinopoisk.ru" },
          { name: "Яндекс Музыка", cashback: "12%", logo: "https://logo.clearbit.com/yandex.ru" },
          { name: "IVI", cashback: "6%", logo: "https://logo.clearbit.com/ivi.ru" },
        ],
      },
      {
        id: "sport",
        name: "Спорт",
        emoji: "🏋️",
        stores: [
          { name: "Спортмастер", cashback: "5%", logo: "https://logo.clearbit.com/sportmaster.ru" },
          { name: "Decathlon", cashback: "5%", logo: "https://logo.clearbit.com/decathlon.ru" },
          { name: "Nike", cashback: "6%", logo: "https://logo.clearbit.com/nike.com" },
        ],
      },
      {
        id: "kids",
        name: "Дети и игрушки",
        emoji: "🧸",
        stores: [
          { name: "Детский мир", cashback: "7%", logo: "https://logo.clearbit.com/detmir.ru" },
          { name: "Яндекс Маркет", cashback: "10%", logo: "https://logo.clearbit.com/market.yandex.ru" },
          { name: "Кораблик", cashback: "5%", logo: "https://logo.clearbit.com/korablik.ru" },
        ],
      },
    ],
  },
]
