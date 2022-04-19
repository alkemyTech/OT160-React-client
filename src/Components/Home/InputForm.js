import { Field, ErrorMessage } from 'formik';
import '../FormStyles.css';
export default function InputForm({
  type,
  id,
  props,
  placeholder,
  value,
  error,
}) {
  return (
    < >
      <Field
        className="input-field"
        type={type}
        name={id}
        value={value}
        onChange={props.handleChange}
        placeholder={placeholder}
      ></Field>

      <ErrorMessage name={id} component={() => <div>{error}</div>} />
    </>
  );
}
