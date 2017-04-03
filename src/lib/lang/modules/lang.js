export const SET_LANG = 'SET_LANG';

export const setLang = (lang) => {
  return ({type: SET_LANG, lang: lang});
};

export const actions = {
  setLang
};

const ACTION_HANDLERS = {
  [SET_LANG]: (state, action) => Object.assign({}, state, {lang: action.lang})
};

const initialState = {
  lang: {}
};

export default function langReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
