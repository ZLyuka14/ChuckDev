const initialState = {
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  value: 'Let me think.',
};

type QuoteType = {
  icon_url: string;
  value: string;
};

export default function reducer(state = initialState, action: { type: string; payload: QuoteType }): QuoteType {
  switch (action.type) {
    case 'GET_QUOTE': {
      return { ...state, ...action.payload };
    }

    default: {
      return { ...state };
    }
  }
}
