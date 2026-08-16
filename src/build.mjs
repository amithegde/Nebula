import nebula from "./workbench/nebula.mjs";
import nebulaLight from "./workbench/nebula-light.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
   { nebula: nebula },
   { "nebula-light": nebulaLight }
];


buildAllThemes(THEMES);
