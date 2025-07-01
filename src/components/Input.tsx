import type { ControllerRenderProps } from 'react-hook-form';
import type { IFormInput } from '../App.tsx';

type InputTypes = 'text' | 'number' | 'date' | 'email' | 'password';

export interface IInputProps {
  type: InputTypes;
  id: string;
  label: string;
  placeholder: string;
  field: ControllerRenderProps<IFormInput, keyof IFormInput>;
}

export function Input({ type, id, label, placeholder, field }: IInputProps) {
  return (
    <div className="form__input">
      <label htmlFor={id}>{label}:</label>
      <input {...field} type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
