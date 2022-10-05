// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Initial from "./Initial/index";
import Home from "./Home/index";

export default function RouterPage() {
    return (
        // <BrowserRouter>
        //     <Routes>
        // {localStorage.getItem("token") ? (
        //     <Route path="/" element={<Home />} />
        // ) : (
        //     <Route path="/" element={<Initial />} />
        // )}
        <>
            <Home />
        </>
        //     </Routes>
        // </BrowserRouter>
    );
}
