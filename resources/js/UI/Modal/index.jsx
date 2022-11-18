import { useState } from "react";
export default function Index({ children, className }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={className}>
                {children}
            </div>
        </>
    );
}
