import { ReactElement } from "react";

export const getLibraryPath = (metadata: DocumentationMetadata, section?: DocumentationSection) => {
    return `/library/${metadata.path}#${section?.title ?? ''}`;
}

export interface DocumentationMetadata {
    path: string,
    title: string,
    description: string | ReactElement;
    lastUpdated: string,
    sections: DocumentationSection[]
}

export interface DocumentationSection {
    title: string;
    html: ReactElement;
}

interface DocumentationProps {
    metadata: DocumentationMetadata,
}
export default function Documentation({metadata} : DocumentationProps) {
    return (
        <section>
            <h1>{metadata.title} - last updated: {metadata.lastUpdated}</h1>
            {metadata.sections.map(section => <>
                <h2 id={section.title}>{section.title}</h2>
                {section.html}
            </>)}
        </section>
    );
}