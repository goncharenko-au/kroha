export default {
    mutations: {
        addPositions(state, position) {
            if (state.allPositions.find(item => item.id === position.id)) {
                position.count++
            } else {
                state.allPositions.push(position)
            }
        },
        deletePosition(state, position) {
            const currentItem = state.allPositions.findIndex(item => item === position);
            state.allPositions = [...state.allPositions.slice(state.allPositions[0], currentItem), ...state.allPositions.slice(currentItem + 1)];
            return state.allPositions;
        }
    },
    state: {
        allPositions: []
    },
    getters: {
        getPositions(state) {
            return state.allPositions
        },
        allCount(state) {
            let count = 0;
            state.allPositions.map((item) => (count += item.count));
            return count;
        },
    }
}