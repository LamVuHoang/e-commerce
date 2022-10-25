import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/index";
import Footer from "./Footer/index";
import Home from "./Home/index";
import Test from "./Test/index";

export default function RouterPage() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/test" element={<Test />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
