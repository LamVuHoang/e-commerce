import { useState } from "react";

const Index: React.FC<{ children: React.ReactNode; className: string }> = ({
    children,
    className,
}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={className}>{children}</div>
        </>
    );
};

export default Index;
