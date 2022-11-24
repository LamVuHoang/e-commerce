import axios from "axios";

// interface ImportMetaEnv extends Readonly<Record<string, string>> {
//     VITE_API_URL: string;
// }

// interface ImportMeta {
//     readonly env: ImportMetaEnv;
// }

const API_URL = import.meta.env.VITE_API_URL;

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    },
});
