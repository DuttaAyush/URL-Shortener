// import axiosInstance from "../utils/axiosInstance"

// export const createShortUrl = async (url,slug) => {
//     const { data } = await axiosInstance.post("/api/create", { url,slug })
//     return data.shortUrl
// }

import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url, customSlug = "") => {
  try {
    const { data } = await axiosInstance.post("/api/create", { 
      url, 
      slug: customSlug 
    })
    return data.shortUrl
  } catch (error) {
    // Extract error message from response
    const errorMessage = error.response?.data?.message || 
                         "Failed to create short URL"
    
    // Create a new error with the message
    throw new Error(errorMessage)
  }
}