/**
 * @module "actions.settings"
 * @desc Actions related to settings page.
 */

import { createActions } from 'redux-actions';
import _ from 'lodash';
import { getService } from '../services/user-traits';

/**
 * @static
 * @desc Creates an action that loads user's all traits.
 * @param {String} handle the topcoder member handle
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getAllUserTraits(handle, tokenV3) {
  const data = await getService(tokenV3).getAllUserTraits(handle);
  return { data, handle };
}

/**
 * @static
 * @desc Creates an action that  add trait by trait id.
 * @param {String} handle member's handle.
 * @param {String} traitId trait id.
 * @param {Array} data trait data array.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function addUserTrait(handle, traitId, data, tokenV3) {
  const result = await getService(tokenV3).addUserTrait(handle, traitId, data);
  return { result, handle, traitId };
}

/**
 * @static
 * @desc Creates an action that update trait by trait id.
 * @param {String} handle member's handle.
 * @param {String} traitId trait id.
 * @param {Array} data trait data array.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function updateUserTrait(handle, traitId, data, tokenV3) {
  const result = await getService(tokenV3).updateUserTrait(handle, traitId, data);
  return { result, handle, traitId };
}

/**
 * @static
 * @desc Creates an action that delete trait by trait id.
 * @param {String} handle member's handle.
 * @param {String} traitId trait id.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function deleteUserTrait(handle, traitId, tokenV3) {
  const data = await getService(tokenV3).deleteUserTrait(handle, traitId);
  return { data, handle, traitId };
}

export default createActions({
  SETTINGS: {
    GET_ALL_USER_TRAITS: getAllUserTraits,
    ADD_USER_TRAIT: addUserTrait,
    DELETE_USER_TRAIT: deleteUserTrait,
    UPDATE_USER_TRAIT: updateUserTrait,
    MODIFY_USER_TRAIT_INIT: _.noop,
  },
});
