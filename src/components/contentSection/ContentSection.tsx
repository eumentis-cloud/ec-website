import React from "react";

type ContentSectionProps = {
    sectionTitle: string;
    imgSrc: any;
    sectionContent: JSX.Element;
    contentClassName?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({sectionTitle, sectionContent, imgSrc, contentClassName}) => {
    return (
        <section className="page-content-container">
            <h1 className="page-title">{sectionTitle}</h1>
            <div className="container">
                <div id="page-content-section" className="row justify-content-around">
                    <div className="col-12 col-lg-5 page-image-container">
                        <img className="page-image" src={imgSrc} alt={`${sectionTitle} artwork`} />
                    </div>
                    <div id="page-content" className={`col-12 col-lg-7 px-4 ${contentClassName}`}>
                        {sectionContent}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentSection;
