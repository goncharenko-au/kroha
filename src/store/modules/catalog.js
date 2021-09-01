export default {
    actions: {},
    mutations: {
        // filterPositions(state, category = "Футболки") {
        //     console.log(category)
        //     const newCatalog = state.catalog.filter(item => item.category === category);
        //     console.log(newCatalog)
        //     return newCatalog;
        // state.catalog = state.catalog.filter(item => {
        // console.log(item.category === category)
        // return item.category === category
        // console.log(item.category + " 11111111111111111")
        // console.log(category)
        // })
        // }
    },
    state: {
        catalog: [
            {
                id: 1,
                img: "https://l.interesbest.news/img/products/638-bebek-kz-ks-giysileri-setleri-kapuesonlu-asag-ceket-tavsan-bask-tulum-kar-giyim-cocuk-bebek-kyafetleri-3-adet-1-2-3-4-yl.jpg",
                title: "Костюм для девочки",
                newPrice: "599",
                oldPrice: "719",
                sale: 20,
                category: "Костюмы и комплекты",
                descr: "Невероятно красивый и нарядный костюм, прекрасно подойдет маленькой моднице. Основные преимущества: легкая ткань обеспечит комфорт в жаркую погоду...",
                count: 1
            },
            {
                id: 2,
                img: "https://images.shafastatic.net/102610012",
                title: "Яркая куртка",
                newPrice: "999",
                oldPrice: "",
                category: "Куртки, пальто",
                descr: "Куртка  будет отличным выбором для вашего ребенка, так как обеспечит ему тепло, комфорт и уют на прогулках весной или осенью. К ней можно подобрать красивую шапку и шарф",
                count: 1
            },
            {
                id: 3,
                img: "https://static-sl.insales.ru/images/products/1/6520/433469816/Z2-38-1020-4.jpg",
                title: "Платье праздничное",
                newPrice: "1050",
                oldPrice: "",
                category: "Платья",
                descr: "Платье  - стильная и модная одежда, которая прекрасно подойдет для вашей модницы, подарит ей восторг, радость и сделает самой красивой на любом празднике. Дополнив его модными аксессуарами, получится создать уникальный и неповторимый образ",
                count: 1
            },
            {
                id: 4,
                img: "https://www.reserved.com/media/catalog/product/1/8/1828D-59J-020-1.jpg",
                title: "Худи",
                newPrice: "600",
                oldPrice: "750",
                sale: 20,
                category: "Худи",
                descr: "Худи станет отличным дополнением гардероба для вашего ребенка",
                count: 1
            },
            {
                id: 5,
                img: "https://content2.rozetka.com.ua/goods/images/original/22266415.jpg",
                title: "Ночная рубашка для девочки",
                newPrice: "465",
                oldPrice: "",
                category: "Пижамы и ночнушки",
                descr: "Ночная рубашка хлопковая, свободного кроя, длинный рукав",
                count: 1
            },
            {
                id: 6,
                img: "https://goldykids.com/business/uploads/products/img/976.021.632.jpg",
                title: "Платье с длинным рукавом",
                newPrice: "699",
                oldPrice: "839",
                sale: 20,
                category: "Платья",
                descr: "Замечательное платье, которое обязательно понравится вашей девочке",
                count: 1
            },
            {
                id: 7,
                img: "https://i.pinimg.com/originals/3a/63/fe/3a63feeb00554c44c3480ce88fe860db.jpg",
                title: "Платье с цветочным узором",
                newPrice: "899",
                oldPrice: "",
                category: "Платья",
                descr: "Платье - нарядная, удобная и приятная одежда для вашего ребенка",
                count: 1
            },
            {
                id: 8,
                img: "https://images.shafastatic.net/326054204",
                title: "Деткое поло",
                newPrice: "759",
                oldPrice: "829",
                category: "Футболки",
                descr: "Уникальный материал, который обеспечит оптимальную терморегуляцию и комфорт - трикотаж Лакоста (100% хлопок)",
                count: 1
            },
            {
                id: 9,
                img: "https://images.shafastatic.net/327996159",
                title: "Блуза",
                newPrice: "999",
                oldPrice: "",
                category: "Рубашки, блузы",
                descr: "Блуза для стильных малышек",
                count: 1
            },
            {
                id: 10,
                img: "https://ido.in.ua/15457-tm_thickbox_default/yubka-dlya-devochki-ido-podrostka-velyur-plisse-41967002513.jpg",
                title: "Блуза",
                newPrice: "1459",
                oldPrice: "1799",
                category: "Юбки",
                descr: "Плиссированная велюровая юбка с эластичным поясом с люрексом универсальная модель для проведения свободного времени с мамой и папой, друзьями. Юбка на трикотажной хлопковой подкладке",
                count: 1
            },
            {
                id: 11,
                img: "https://img.faberlic.com/medias/00373666-460Wx665H?context=bWFzdGVyfGltYWdlc3w5NjA0M3xpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2g0NS9oY2EvaDAwLzg5NzQ2MTg3MjIzMzQvMDAzNzM2NjZfNDYwV3g2NjVIfGE2ZTlmMmQyYWI1OGY4NGE1OTAzZWIxYTNlMzRjNDBkYzQ5MzlmZGM3YTM5MWE4MmY5YjEzMzA2MDJiYzA3YWQ",
                title: "Джинсы для мальчика",
                newPrice: "1499",
                oldPrice: "",
                category: "Штаны и джинсы",
                descr: "Плиссированная велюровая юбка с эластичным поясом с люрексом универсальная модель для проведения свободного времени с мамой и папой, друзьями. Юбка на трикотажной хлопковой подкладке",
                count: 1
            },
            {
                id: 12,
                img: "https://totalfit.com.ua/wp-content/uploads/83w-4.jpg",
                title: "Лосины детские",
                newPrice: "519",
                oldPrice: "599",
                category: "Лосины",
                descr: "Необычные лосины для юной модницы",
                count: 1
            },
            {
                id: 13,
                img: "https://storage.super-kids.com.ua/cache/Boys/Boys_2-5_years/IMG_0170.jpg/234b1a386d0cd7582fc59e5e47775acd.jpg?p=catalog_product_mobile&s=1a95ff1a3f2b200d4f039740701e295f",
                title: "Шорты котоновые для мальчика",
                newPrice: "869",
                oldPrice: "",
                category: "Шорты",
                descr: "Стильные котоновые шорты для мальчика. Идеально подойдут под футболку и рубашку.",
                count: 1
            },
            {
                id: 14,
                img: "https://www.odevaika.ru/upload/catalog_images/193111/%D0%B40193115_193119_193111_193206_0.jpg",
                title: "Желтые брюки для мальчика",
                newPrice: "799",
                oldPrice: "1299",
                category: "Брюки",
                descr: "Текстильные брюки с 4 карманами",
                count: 1
            },
            {
                id: 15,
                img: "https://img.ostin.com/upload/mdm/media_content/resize/265/767_1062_2c9d/41271450299.jpg",
                title: "Толстовка для девочек",
                newPrice: "799",
                oldPrice: "1599",
                category: "Толстовки, cвитеры",
                descr: "Теплая толстовка для девочек, которые хотят выглядеть стильно",
                count: 1
            },
            {
                id: 16,
                img: "https://image.made-in-china.com/202f0j10UpjRowesnhcf/New-Autumn-Winter-Kids-Socks-Boys-Baby-Girls-Cotton-Knee-High-Socks-Candy-Color-Toddler-Needle-Short-Socks-for-Children.jpg",
                title: "Носки осень/зима",
                newPrice: "299",
                oldPrice: "359",
                category: "Носки и гольфы",
                descr: "Высокие носки для мальчтков и девочек",
                count: 1
            },
            {
                id: 17,
                img: "https://www.dhresource.com/0x0/f2/albu/g18/M00/35/F7/rBNaNmBJj7iAV8IZAADUK54Lcwo039.jpg/irregular-girls-swimwear-2021-new-arrival.jpg",
                title: "Пляжный купальник для девочки",
                newPrice: "1299",
                oldPrice: "1543",
                category: "Купальники",
                descr: "Купальник для маленькой модницы",
                count: 1
            },
            {
                id: 18,
                img: "https://images.shafastatic.net/110123854",
                title: 'Перчатки для мальчика "Тачки"',
                newPrice: "200",
                oldPrice: "449",
                category: "Варежки и перчатки",
                descr: "Теплые перчатки, на рост 116",
                count: 1
            },




        ],

        categories:
            ["Футболки", "Рубашки, блузы", "Костюмы и комплекты", "Платья", "Юбки", "Штаны и джинсы", "Лосины", "Шорты", "Брюки", "Толстовки, cвитеры", "Носки и гольфы", "Купальники", "Куртки, пальто", "Пижамы и ночнушки", "Варежки и перчатки"]
    },
    getters: {
        allCatalog(state) {
            return state.catalog
        },
        getCategories(state) {
            return state.categories
        },
        filterPositions: state => category => {
            return state.catalog.filter(item => item.category === category)
        }
    }
}
