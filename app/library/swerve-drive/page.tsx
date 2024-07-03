import Documentation from "@/app/library/documentation";
import { SwerveDriveMetadata } from "./metadata";

export default function Test() {
  return (
    <Documentation metadata={SwerveDriveMetadata} />
  );
}