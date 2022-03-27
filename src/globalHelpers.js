import Paragraph from "./PreviewMode/Paragraph";
import Image from "./PreviewMode/Image";
import Quote from "./PreviewMode/Quote";

export const BLOCK_TYPES = [
    {
        type: "Bekezdés",
        value: 1,
    },
    {
        type: "Kép",
        value: 2
    },
    {
        type: "Idézet",
        value: 3
    },
];

export const OPTION_TYPES = {
    PARAGRAPH: 1,
    IMAGE: 2,
    QUOTE: 3
};

export const POSITION_TYPES = [
    {
        type: "Balra",
        value: 'flex-start',
    },
    {
        type: "Középre",
        value: 'center'
    },
    {
        type: "Jobbra",
        value: 'flex-end'
    },
];

export const CONTENT_TYPES = {
    PARAGRAPH: 1,
    IMAGE: 2,
    QUOTE: 3
}

export const contentSeparator = (response) => {
    let component;
    switch (response.type) {
        case CONTENT_TYPES.PARAGRAPH:
            component = <Paragraph id={response.id} content={response.content} response={response}/>;
            break;
        case CONTENT_TYPES.IMAGE:
            component = <Image src={response.src} alt={response.alt} position={response.position} text={response.text}/>
            break;
        case CONTENT_TYPES.QUOTE:
            component = <Quote content={response.content}/>
            break;
    }
    return component;

};

export const setLinkFromText = (referenceLinks, linkedText, text) => {
    const linkRegex = /@\S+/gm;
    const renderTag = (link, foundText) => {
        if (!referenceLinks.includes('http')) {
            link = `http://${link}`;
        }
        return `<a target="_blank" rel="noopener noreferrer" href="${link}">${foundText}</a>`;
    }
    let foundText = text.match(linkRegex);
    if (foundText) {
        linkedText.map((link, index) => {
            if (foundText.includes(linkedText[index])) {
                text = text.replace(linkedText[index], renderTag(referenceLinks[index], linkedText[index].replace('@', '')));
            }
        })
    }
    return text;
};

export function isExist(x) {
    return typeof (x) !== 'undefined';
};

export function isDefined(x) {
    return Boolean(isExist(x) && (x !== null));
};

export const EDIT_TYPE = {
    EDIT: "edit",
    CREATE_NEW: "create",
};
