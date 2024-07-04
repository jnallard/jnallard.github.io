import Documentation from "@/app/library/documentation";
import { DynamicCropMetadata } from "./metadata";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: `${DynamicCropMetadata.title} - CHAOS Library`,
}

export default function DynamicCrop() {
  return (
    <Documentation metadata={DynamicCropMetadata} />
  );
}