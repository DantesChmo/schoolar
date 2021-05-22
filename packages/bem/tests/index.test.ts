import { bem } from '../src';

describe('Bem function tests', () => {
  test('BlockName', () => {
    const b = bem('BlockName');
    expect(b()).toStrictEqual('BlockName');
  });

  test('BlockName__Element', () => {
    const b = bem('BlockName');
    expect(b('Element')).toStrictEqual('BlockName__Element');
  });

  test('BlockName_hasMode', () => {
    const b = bem('BlockName');
    expect(b({hasMode: true})).toStrictEqual('BlockName BlockName_hasMode');
  });

  test('BlockName_modName_withValue', () => {
    const b = bem('BlockName');
    expect(b({modName: 'withValue'})).toStrictEqual('BlockName BlockName_modName_withValue');
  });

  test('BlockName__ElementName_modName', () => {
    const b = bem('BlockName');
    expect(b('ElementName', {modName: true}))
      .toStrictEqual('BlockName__ElementName BlockName__ElementName_modName');
  });

  test('BlockName__ElementName_modName_modValue', () => {
    const b = bem('BlockName');
    expect(b('ElementName', {modName: 'modValue'}))
      .toStrictEqual('BlockName__ElementName BlockName__ElementName_modName_modValue');
  });

  test('BlockName_mod1_value BlockName_mod2_value', () => {
    const b = bem('BlockName');
    expect(b({mod1: 'value', mod2: 'value'}))
      .toStrictEqual('BlockName BlockName_mod1_value BlockName_mod2_value');
  });

  test('BlockName and []', () => {
    const b = bem('BlockName');
    expect(b([])).toStrictEqual('BlockName');
  });

  test('BlockName []Element and string mod', () => {
    const b = bem('BlockName');
    expect(b(2, 'Element')).toStrictEqual('');
  });
});
