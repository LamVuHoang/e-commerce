import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Initial from "./Initial/index";
import Home from "./Home/index";
import Header from "./Header/index";
import Footer from "./Footer/index";
import SignIn from "./SignIn/index";

export default function RouterPage() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}
