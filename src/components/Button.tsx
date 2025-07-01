interface IButtonProps {
  label: string;
}


export function Button({label}: IButtonProps) {
  return(
    <button type="submit" className="form__button">
      {label}
    </button>
  )
}