import React from "react";

export const Col = ({ size, children, direction }) => (
    <div className={size.split(" ").map(size => "col-" + size).join(" ") + " " + direction}>
        {children}
    </div>
);
