import axios from 'axios';

const api = axios.create(
    {
        baseURL: "https://blog-page-9b1f7-default-rtdb.europe-west1.firebasedatabase.app",
    }
);


const firebaseConfig = {
    apiKey: "AIzaSyAog6Ak1K2HS6qGF_3caC4r3QCqaz5Mbe0",
    authDomain: "blog-page-9b1f7.firebaseapp.com",
    databaseURL: "https://blog-page-9b1f7-default-rtdb.europe-west1.firebasedatabase.app.json",
    projectId: "blog-page-9b1f7",
    storageBucket: "blog-page-9b1f7.appspot.com",
    messagingSenderId: "12356660190",
    appId: "1:12356660190:web:9d944458bd868ac7ec4b4f",
    measurementId: "G-H02D51MG6K"
};

export const postBlogData = (rowData) => {
    const fetchedResult = [];
    api.post(`/blogs.json`, rowData).then((res) => {
        if (res.statusText == "OK") {
        }
    })
};

export const getBlogData = (setState, setLoading, url) => {
    api.get(`${url}.json`).then((res) => {
        if (res.statusText == "OK") {
            setState([res.data]);
            setLoading(false);
        }
    })
};





