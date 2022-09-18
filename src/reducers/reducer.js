import { act } from 'react-dom/test-utils';
import * as actiontype from '../actionTypes/actiontype'

const initialState = {
    product: [],
    cart: [],
    order: []
}


const myReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case actiontype.GET_PRODUCT:
            return { ...state, product: payload }

        case actiontype.ADD_PRODUCT:
            let notRepeatProduct = state.cart.filter(item => item.id !== payload.id)
            return { ...state, cart: [...notRepeatProduct, payload] }

        case actiontype.INCQUNATITY:
            let qunatity = state.cart[payload].qunatity
            qunatity += 1
            const newCart = state.cart.map((item, i) => {
                if (i == payload) {
                    item.qunatity = qunatity
                    return item
                }
                else {
                    return item
                }
            })
            return { ...state, cart: newCart }
        case actiontype.DECQUNATITY:
            let decquantity = state.cart[payload].qunatity
            decquantity -= 1
            const newCarts = state.cart.map((item, i) => {

                if (i == payload) {
                    item.qunatity = decquantity
                    return item
                }
                else {
                    return item
                }
            })
            return { ...state, cart: newCarts }

        case actiontype.ADD_ORDERS:
            return {
                ...state, order: [payload, ...state.order]
            }

        case actiontype.CLEAR_CART:
            return { ...state, cart: [] }
            break;
        default:
            return state
    }
}

export default myReducer