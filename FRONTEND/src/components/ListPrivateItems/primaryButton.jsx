import React from "react";
import {Link} from "react-router-dom";

// make mee button component

const PrimaryButton = () => {
    return (
        <>
            <Link to={`/add`} className="btn btn-primary text-decoration-none text-white">add Item</Link>
        </>
    );
    }

export default PrimaryButton;
