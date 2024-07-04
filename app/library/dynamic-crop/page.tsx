import Documentation from "@/app/library/documentation";
import { DynamicCropMetadata } from "./metadata";

export default function Test() {
  return (
    <Documentation metadata={DynamicCropMetadata} />
  );
}