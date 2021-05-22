function getModsString(
  mods: Record<string, string | number | boolean | null | undefined>,
  root: string
): string {
  return Object.entries(mods)
    .reduce((result, [modName, modValue]) => {
      if (typeof modValue !== 'string' && typeof modValue !== 'number' && Boolean(modValue)) {
        result.push(modName);
      } else if (Boolean(modValue)) {
        result.push(`${modName}_${modValue}`);
      }

      return result;
    }, [] as string[])
    .map((selector) => `${root}_${selector}`)
    .join(' ');
}

function bem(blockName: string) {
  return function (...args: any[]): string {
    // BlockName
    if (!args[0]) {
      return blockName;
    }

    // Have an element
    if (typeof args[0] === 'string') {
      // Doesn't have mods
      // BlockName__ElementName
      const root = `${blockName}__${arguments[0]}`
      if (typeof args[1] !== 'object' && arguments[1] !== null) {
        return root;
      }

      // Have an element and mods are exists
      // BlockName__ElementsName BlockName__ElementsName_theme_white BlockName__ElementsName_visible
      return `${root} ${getModsString(arguments[1], root)}`;
    }

    // Doesn't have an element and only mods are exists
    if (typeof args[0] === 'object' && arguments[0] !== null) {
      // BlockName_theme_white BlockName_visible
      return `${blockName} ${getModsString(arguments[0], blockName)}`.trim();
    }

    return '';
  }
}

export {
  bem
};