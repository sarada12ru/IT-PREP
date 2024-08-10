import { createAction, props } from '@ngrx/store';
import { ITech } from '../../interfaces/ITech';

export const createTech = createAction(
  'CREATE_TECH',
  props<{ tech: ITech }>()
);

export const updateTech = createAction(
  'UPDATE_TECH',
  props<{tech: ITech }>()
);

export const setTechList = createAction(
  'SET_TECH_LIST',
  props<{techs: ITech[] }>()
)