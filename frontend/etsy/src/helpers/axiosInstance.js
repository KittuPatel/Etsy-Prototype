import axios from "axios"

export const baseURL =
  "https://f204-2600-1700-65aa-d910-72fe-e6c-a33-e08f.ngrok.io"

export default (history = null) => {
  // const baseURL = "http://localhost:3001"
  let headers = {}

  if (localStorage.token) {
    headers.Authorization = `${localStorage.token}`
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  })

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response)
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
      if (error.response.status === 403) {
        localStorage.removeItem("token")
        if (history) {
          history.push("/login")
        } else {
          window.location = "/login"
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
    }
  )

  return axiosInstance
}
