import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
        <footer> Copyright@{year}</footer>
    );
}

export default Footer;
