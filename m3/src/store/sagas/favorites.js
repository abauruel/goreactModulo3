import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoritesSuccess, addFavoritesFailure } from '../actions/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };
    yield put(addFavoritesSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoritesFailure('Error ao adicionar repositório'));
  }
}
