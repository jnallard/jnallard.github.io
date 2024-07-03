import Documentation, { DocumentationMetadata, DocumentationSection } from "@/app/shared/documentation";

const sections: DocumentationSection[] = [
  {
    title: "Math 1",
    html: <>This is my math section<div style={{minHeight: "200vh"}}></div></>
  },
  {
    title: "Math 2",
    html: <>This is my math section<div style={{minHeight: "200vh"}}></div></>
  },
]

export const TestMetadata: DocumentationMetadata = {
  path: "test",
  title: "Test",
  lastUpdated: "July 2024",
  sections: sections,
}


export default function Test() {
  return (
    <Documentation metadata={TestMetadata} />
  );
}