import * as actionTypes from '../actionTypes/actiontype'

export const getProducts = (payload) => ({
    type: actionTypes.GET_PRODUCT,
    payload: payload
})

export const addProducts = (product) => ({
    type: actionTypes.ADD_PRODUCT,
    payload: product
})

export const incQuan = (key) => ({
    type: actionTypes.INCQUNATITY,
    payload: key
})

export const decQuan = (key) => ({
    type: actionTypes.DECQUNATITY,
    payload: key
})

export const addOrders = (product) => ({
    type: actionTypes.ADD_ORDERS,
    payload: product,
});

export const clearCart = () => ({
    type: actionTypes.CLEAR_CART,
})