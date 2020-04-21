import C from './constants';

/**
 * Request to Search Request and store
 */
export const setText = params => ({
  type: C.SET_TEXT,
  params,
});

export const setTextEnter = () => ({
  type: C.SET_TEXT_CONFIRM,
});

export default {
  setText,
  setTextEnter,
}
