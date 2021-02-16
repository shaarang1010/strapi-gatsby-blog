import React from 'react';
import Markdown from "react-markdown";

const Footer = ({data}) => {
    return(
        <div>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-center">
                    <div className="uk-navbar-center-left"></div>
                    <div className="uk-navbar-item">
                    <Markdown source={data.content} escapeHtml={false} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Footer;
