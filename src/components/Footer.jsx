import React from "react";

function Footer() {
    let curData = new Date();
    let curYear = curData.getFullYear();

    return(
        <footer>
            <p>Copyright@{curYear}</p>
        </footer>
    )

}

export default Footer;