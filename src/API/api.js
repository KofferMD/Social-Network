import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "eadb29d4-e6ae-4f06-a81f-768bb5e35dbb"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser (id) {
        return instance.post(`follow/${id}`);
    },
    unfollowUser (id) {
        return instance.delete(`follow/${id}`);
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    },
    getAuth () {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
    }
}


