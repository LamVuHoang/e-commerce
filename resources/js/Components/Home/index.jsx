import Header from "../Header/index";
import Footer from "../Footer/index";
import "./home.css";

export default function index() {
    return (
        <>
            <Header />
            <div className="my-home-text">
                Home Page
            </div>
            <Footer />
        </>
    );
}
