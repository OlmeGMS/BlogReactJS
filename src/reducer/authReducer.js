import { types } from '../types/inedex';

export const authReducer = (state = {}, action) => {
    switch (action.type){
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                ...action.payload,
                logged: false
            }
        return state
    }
}