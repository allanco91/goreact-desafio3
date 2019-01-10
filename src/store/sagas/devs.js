import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as DevActions } from '../ducks/devs';

export function* addDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);
    const { latitude, longitude } = action.payload.cordinates;

    const isDuplicated = yield select(state => state.devs.data.find(dev => dev.id === data.id));

    if (isDuplicated) {
      yield put(DevActions.addDevFailure('Usuário duplicado.'));
      toast.error('Usuário duplicado.');
    } else {
      const devData = {
        id: data.id,
        login: data.login,
        name: data.name,
        avatar: data.avatar_url,
        latitude,
        longitude,
      };

      yield put(DevActions.addDevSuccess(devData));
      toast.success('Usuário adicionado com sucesso!');
    }
  } catch (err) {
    yield put(DevActions.addDevFailure('Erro ao adicionar um novo usuário.'));
    toast.error('Erro ao adicionar um novo usuário.');
  }
}
