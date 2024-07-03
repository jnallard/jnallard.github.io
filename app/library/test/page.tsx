import Documentation, { DocumentationMetadata, DocumentationSection } from "@/app/library/documentation";

const sections: DocumentationSection[] = [
  {
    title: "Math 1",
    html: <>This is my math section</>
  },
  {
    title: "Math 2",
    html: <>This is my math section</>
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