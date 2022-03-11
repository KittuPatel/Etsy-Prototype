import axiosInstance from "../../helpers/axios";

// so actions are responsible for making api calls.and tells the reducer how to update the state.

export const registerAction = (user) => {
    axiosInstance.post("/register")
        .then((response) => console.log("response from registerAction", response))
        .catch((error) => console.log("error from registerAction", error));
};