import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

// export const getIcon = (iconName: string): IconDefinition | null => {
//   const formattedName = `fa${iconName
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join("")}`;

//   const icon = (solidIcons as Record<string, unknown>)[formattedName];
//   if (icon && (icon as IconDefinition).prefix) {
//     return icon as IconDefinition;
//   }

//   return null;
// };
//Modificar el codigo anterior para que verifique en que tipo de iconos se encuentra y retornarlo
export const getIcon = (iconName: string): IconDefinition | null => {
  const formattedName = `fa${iconName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")}`;

  let icon = (solidIcons as Record<string, unknown>)[formattedName];
  if (icon && (icon as IconDefinition).prefix) {
    return icon as IconDefinition;
  }

  icon = (regularIcons as Record<string, unknown>)[formattedName];
  if (icon && (icon as IconDefinition).prefix) {
    return icon as IconDefinition;
  }

  icon = (brandIcons as Record<string, unknown>)[formattedName];
  if (icon && (icon as IconDefinition).prefix) {
    return icon as IconDefinition;
  }

  return null;
};