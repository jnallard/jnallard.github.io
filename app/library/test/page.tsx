import Documentation from "@/app/library/documentation";
import { TestMetadata } from "./test-metadata";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: `${TestMetadata.title} - CHAOS Library`,
}

export default function Test() {
  return (
    <Documentation metadata={TestMetadata} />
  );
}