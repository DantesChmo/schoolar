# @schoolar-ru/bem

![Version](./version-badge.svg)
![Coverage lines](./coverage/badge-lines.svg)
![Coverage functions](./coverage/badge-functions.svg)
![Coverage branches](./coverage/badge-branches.svg)

## Description
Tool for generating classNames by BEM notation

## Usage
```ts
import { bem } from '@schoolar-ru/bemtmp';

const b = bem('BlockName');

b(); // BlockName

b('Element'); // BlockName__Element

b({modName: 'modValue'}); // BlockName BlockName_modName_modValue

b('Element', {modName: 'modValue'}); // BlockName__Element BlockName__Element_modName_modValue

b({mod1: 'val1', mod2: 'val2'}); // BlockName BlockName_mod1_val1 BlockName_mod2_val2

b('Element', {mod1: 'val1', mod2: 'val2'}); // BlockName__Element BlockName__Element_mod1_val1 BlockName__Element_mod2_val2
```

## Contributing
See [CONTRIBUTING.MD](./CONTRIBUTING.md)
