import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"


//  register api
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/register`, reqBody)
}

// login api
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/login`, reqBody)
}

// api to get home books
export const homeBookApi = async()=>{
    return await commonApi('GET',`${serverurl}/home-books`)
}

// api to add a book
export const addBookApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST',`${serverurl}/add-book`, reqBody, reqHeader)
}


// api to view a book
export const viewBookApi = async(id)=>{
    return await commonApi('GET', `${serverurl}/view-book/${id}`) 
}

// api to add a review
export const addReviewApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST',`${serverurl}/add-review`, reqBody,reqHeader)
}

// api to view a book
export const viewReviewsApi = async(id)=>{
    return await commonApi('GET', `${serverurl}/view-review`) 
}

// // api to get all user added books
// export const allUserAddedBookApi = async(reqHeader)=>{
//     return await commonApi('GET', `${serverurl}/all-user-added-books`,"",reqHeader)
// }