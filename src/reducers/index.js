
export default function minutemenReducer(defaultComponent = 0) {
    const initialState = {
        uri: '/',
        component: defaultComponent 
    };

    return (state = initialState, action) => {
      switch (action.type) {
        case 'TRANSITION_BY_NAME':
            return {
                ...state,
                ...action.payload
            };
        default:
          return state
      }
    };
}
