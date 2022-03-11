import axiosInstance from "../../helpers/axios";

export const registerAction = (user) => {
    axiosInstance.post("/register")
        .then((response) => console.log("response from registerAction", response))
        .catch((error) => console.log("error from registerAction", error));
};