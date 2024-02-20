
export const addtocart = (product) => ({
    type: "Add_to_cart",
    payload: product
})

export const deletecart = (product) => ({
    type: "Delete_cart",
    payload: product
})