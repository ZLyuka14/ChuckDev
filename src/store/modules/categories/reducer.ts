const initialState = [] as string[];

export default function reducer(state = initialState, action: { type: string; payload: string[] }): string[] {
  switch (action.type) {
    case 'GET_CATEGORIES': {
      return { ...state, ...action.payload };
    }

    default: {
      return { ...state };
    }
  }
}
