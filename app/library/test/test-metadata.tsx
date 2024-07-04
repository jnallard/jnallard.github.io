import { DocumentationMetadata, DocumentationSection } from "@/app/library/documentation";

const sections: DocumentationSection[] = [
  {
    title: "Test 1",
    html: <>This is my test section</>
  },
  {
    title: "Test 2",
    html: <>This is my test section</>
  },
]

export const TestMetadata: DocumentationMetadata = {
  path: "test",
  title: "Test",
  description: "This is my test section.",
  lastUpdated: "July 2024",
  introduction: <>This is my test section</>,
  sections: sections,
}