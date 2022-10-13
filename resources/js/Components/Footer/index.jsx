import "./style.css";
export default function index() {
    return (
        <>
            <div className="w-full block bg-gray-100 pt-5 pb-12 px-5 md:px-12 lg:px-20 xl:px-40 2xl:px-60 flex justify-between items-start text-gray-700">
                <div className="w-1/6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1000px-Logo_NIKE.svg.png"
                        className="h-10 footer-title opacity-70"
                    />
                </div>
                <div className="w-1/6">
                    <p className="footer-title">Buy</p>
                    <p className="footer-content">Registration</p>
                    <p className="footer-content">Voucher & Discount</p>
                    <p className="footer-content">Pay & Shipping</p>
                    <p className="footer-content">Return policy</p>
                </div>
                <div className="w-1/6">
                    <p className="footer-title">Sell</p>
                    <p className="footer-content">Sales registration</p>
                    <p className="footer-content">Seller support</p>
                </div>
                <div className="w-1/6">
                    <p className="footer-title">About</p>
                    <p className="footer-content">Company information</p>
                    <p className="footer-content">Policy</p>
                    <p className="footer-content">Career</p>
                    <p className="footer-content">Advertise</p>
                </div>
                <div className="w-1/6">
                    <p className="footer-title mt-3">Contact</p>
                    <p className="footer-content">(+84) XXXXXXXXX</p>
                    <p className="footer-content">Facebook</p>
                    <p className="footer-content">Twitter</p>
                </div>
            </div>
        </>
    );
}
