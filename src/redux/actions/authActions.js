import { createAction } from '@reduxjs/toolkit';

export const signUpRequest = createAction('auth/signUpRequest');
export const signUpSuccess = createAction('auth/signUpSuccess');
export const signUpError = createAction('auth/signUpError');

export const signInRequest = createAction('auth/signInRequest');
export const signInSuccess = createAction('auth/signInSuccess');
export const signInError = createAction('auth/signInError');

export const logOutSuccess = createAction('auth/logOutSuccess');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
