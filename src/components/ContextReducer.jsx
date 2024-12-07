// import React, { useContext, createContext, useReducer} from 'react';


// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {

// }

// export const CartProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(reducer, []);
//     return (
//         <CartDispatchContext.Provider value={dispatch}>
//             <CartStateContext.Provider value={state}>
//                 {children}
//             </CartStateContext.Provider>
//         </CartDispatchContext.Provider>
//     )
// }

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);

import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
    cart: [],
    isCartVisible: false,
};
;

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    ),
                    isCartVisible: true, // Ensure cart remains visible
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, count: 1 }],
                isCartVisible: true, // Ensure cart remains visible
            };

        case "TOGGLE_CART":
            return { ...state, isCartVisible: !state.isCartVisible };

        default:
            return state;
    }
};



export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { initialState, reducer };


