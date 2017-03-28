export const OPEN_ASIDE_NAV = 'OPEN_ASIDE_NAV';
export const CLOSE_ASIDE_NAV = 'CLOSE_ASIDE_NAV';

export const openAsideNav = () => {
  return ({type: OPEN_ASIDE_NAV});
};

export const closeAsideNav = () => {
  return ({type: CLOSE_ASIDE_NAV});
};

export const actions = {
  openAsideNav,
  closeAsideNav
};

const ACTION_HANDLERS = {
  [OPEN_ASIDE_NAV]: (state) => Object.assign({}, state, {isOpenedAsideNav: true}),
  [CLOSE_ASIDE_NAV]: (state) => Object.assign({}, state, {isOpenedAsideNav: false})
};

const initialState = {
  isOpenedAsideNav: false
};

export default function coreReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
