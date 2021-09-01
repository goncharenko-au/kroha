export default {
    actions: {},
    mutations: {
        updateComments(state, comment) {
            state.comments.unshift(comment)
        }
    },
    state: {
        comments: [
            {
                id: "1",
                img: "https://ae04.alicdn.com/kf/H1e8ef88c0f4c4398806a487e11e53ef97.jpg",
                assessment: 5,
                name: "Оксана Тюрина",
                worth: "Качественный пошив",
                limitations: "Нет"
            },
            {
                id: "2",
                img: "http://sc04.alicdn.com/kf/HTB1ZBQVSpXXXXXkaVXXq6xXFXXXs.jpg",
                assessment: 3,
                name: "Яна Петрова",
                worth: "Очень теплый материал",
                limitations: "Нет"
            },
            {
                id: "3",
                img: "https://little-bunny.com.ua/wp-content/uploads/2021/02/IMG_4473-scaled.jpg",
                assessment: 3,
                name: "Марина Фомина",
                worth: "Легкий и дышащий костюм",
                limitations: "Маломерит"
            },
            {
                id: "4",
                img: "https://sc04.alicdn.com/kf/H68fa35a029054e33a426db8049bacdc9D.jpg",
                assessment: 4,
                name: "Ульяна Ткачева",
                worth: "Прелестное платьице. Блестали в нем на выпускном",
                limitations: "Нет"
            },
            {
                id: "5",
                img: "",
                assessment: 5,
                name: "Наталья Иванова",
                worth: "Заказывала сыну штанишки. Тонкие , лёгкие спортивные штаны , идут размер в размер, с запасом лучше не брать , на мальчика 100см взяла 110 размер , после стирки не сели , очень большие складки внизу , но ничего страшного дорастёт, по позже будем носить , а в целом для детского сада отлично подойдут!",
                limitations: "Нет"
            },
            {
                id: "6",
                img: "",
                assessment: 5,
                name: "Анна Казакова",
                worth: "Костюм очень понравился! Ткань приятная, на худенького мальчика просто замечательно. Обычно проблема подобрать штаны, все сваливается, даже на завязках. Я в восторге! Смотрится очень хорошо. А сын в восторге от машин на кофте!",
                limitations: "Нет"
            },

        ],

        // newComment: {
        //     name: "",
        //     worth: "",
        //     limitations: "",
        // }
    },
    getters: {
        getComments(state) {
            return state.comments
        },
        getFullComments(state) {
            return state.comments.slice(0, 4)
        },
        getShortComments(state) {
            return state.comments.slice(4)
        },
        overallRating(state) {
            const assessments = state.comments.map(item => item.assessment);
            const sumAssessments = assessments.reduce((acc, curr) => acc + curr);
            return +(sumAssessments / state.comments.length).toFixed(1);
        }
    }
}