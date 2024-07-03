import Documentation from "@/app/library/documentation";
import { TestMetadata } from "./test-metadata";

export default function Test() {
  return (
    <Documentation metadata={TestMetadata} />
  );
}