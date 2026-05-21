import type { BodyPart } from "./types";
import data from "./content.json";

const bodyParts: BodyPart[] = data;

export function getBodyParts(): BodyPart[] {
  return bodyParts;
}

export function getBodyPartByName(name: string): BodyPart | undefined {
  return bodyParts.find(
    (part) => part.name.toLowerCase() === name.toLowerCase(),
  );
}
