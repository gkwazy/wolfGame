import React from "react";

export const Row = ({ fluid, children, direction }) => (
    <div className={`row${fluid ? "-fluid" : ""}` + " " + direction}>
        {children}
    </div>
);
