import axios from "axios"

export default (history = null) => {
  const baseURL = "https://9316-2600-1700-65aa-d910-4da-284f-3598-f9ea.ngrok.io"
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
