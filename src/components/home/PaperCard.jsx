import React from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PaperCard = ({paperImage, paperHeading, paperPublishedDate, onClick, paperDOI}) => {
    return (
        <>
            <Link className="blog_card" onClick={onClick}>
                <div className="card_img">
                    <LazyLoadImage
                        className="blog_image"
                        alt={paperHeading}
                        effect="blur"
                        src={paperImage}
                    />
                </div>
                <div className="blog_text">
                    <h1 className="blog_heading">{paperHeading}</h1>
                    <p className="blog_published_date">{paperPublishedDate}</p>
                    {paperDOI ? <a className="doi_url">DOI: {paperDOI}</a> : null}
                </div>
            </Link>
        </>
    );
};

export default PaperCard;
