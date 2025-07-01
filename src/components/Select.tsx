import type { ControllerRenderProps } from 'react-hook-form';
import type { IFormInput } from '../App.tsx';

export type TypeDocument = 'dni' | 'passport' | 'ruc';

export interface ISelectOption {
  id: string;
  value: TypeDocument;
  label: string;
}

export interface ISelectProps {
  id: string;
  label: string;
  options: ISelectOption[];
  field: ControllerRenderProps<IFormInput, keyof IFormInput>;
}

export function Select({ id, label, field, options }: ISelectProps) {
  return (
    <div className="form__input">
      <label htmlFor={id}>{label}:</label>
      <select id={id} {...field} className="form__select">
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
