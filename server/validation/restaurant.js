import joi from 'joi'

export const ValidateRestaurantCity= (restObj) => {
    const Schema=joi.object({
        city :joi.string().required()
    })
    return Schema.validateAsync(restObj)
}

export const ValidateSearchString= (restObj) => {
    const Schema=joi.object({
        searchString :joi.string().required()
    })
    return Schema.validateAsync(restObj)
}