import { type DropdownOption } from '../types';

export const parseFromValuesOrFunc = <T, U>(
  fn: ((arg: U) => T) | T | undefined,
  arg: U,
): T | undefined => (fn instanceof Function ? fn(arg) : fn);

type SlotPropsObject<S> = Exclude<NonNullable<S>, (...args: any[]) => unknown>;

// MRT has no ownerState to call a function-form slot entry with, so only the
// object form of a MUI slotProps entry is supported.
export const parseSlotProps = <S>(
  slotProps: S,
): SlotPropsObject<S> | undefined =>
  slotProps instanceof Function
    ? undefined
    : (slotProps as SlotPropsObject<S> | undefined);

export const getValueAndLabel = (
  option?: DropdownOption | null,
): { label: string; value: string } => {
  let label: string = '';
  let value: string = '';
  if (option) {
    if (typeof option !== 'object') {
      label = option;
      value = option;
    } else {
      label = option.label ?? option.value;
      value = option.value ?? label;
    }
  }
  return { label, value };
};
