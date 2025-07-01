import './App.css';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { Input } from './components/Input.tsx';
import {
  type ISelectOption,
  Select,
  type TypeDocument,
} from './components/Select.tsx';
import { Button } from './components/Button.tsx';

export interface IFormInput {
  name: string;
  lastname: string;
  birthday: string;
  typeDoc: TypeDocument;
  doc: number;
  address: string;
}

const typeDocumentOptions: ISelectOption[] = [
  { id: 'dni', value: 'dni', label: 'DNI' },
  { id: 'passport', value: 'passport', label: 'Pasaporte' },
  { id: 'ruc', value: 'ruc', label: 'RUC' },
];

function App() {
  const { control, handleSubmit } = useForm<IFormInput>({});

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="container_form">
        <p className="container__title">Encuesta #1</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                id="name"
                label="Nombres"
                placeholder="Escribe tu nombre"
                field={field}
              />
            )}
          />

          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                id="lastname"
                label="Apellidos"
                placeholder="Escribe tu Apellido"
                field={field}
              />
            )}
          />

          <Controller
            name="birthday"
            control={control}
            render={({ field }) => (
              <Input
                type="date"
                id="birthday"
                label="Fecha de nacimiento"
                placeholder="Fecha de nacimiento"
                field={field}
              />
            )}
          />

          <Controller
            name="typeDoc"
            control={control}
            render={({ field }) => (
              <Select
                field={field}
                id="typeDoc"
                label="Tipo de Documento"
                options={typeDocumentOptions}
              />
            )}
          />

          <Controller
            name="doc"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                id="doc"
                label="Documento de Identidad"
                placeholder="XXXXXX"
                field={field}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                id="address"
                label="Dirección"
                placeholder="Escribe tu dirección"
                field={field}
              />
            )}
          />

          <Button label="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
