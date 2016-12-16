
export default function minutemenReducer() {
    const initialState = {
        uri: '/'
    };

    return (state = initialState, action) => {
      switch (action.type) {
        case 'TRANSITION_TO':
            return {
                ...state,
                ...action.payload
            };
        default:
          return state
      }
    };
}
