import React from 'react';
import { InputCustomizado } from './styles'

const Input = ({
  id,
  name,
  placeholder,
  onChange,
  type
}) => {
  return ( 
    <InputCustomizado
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
   );
}
 
export default Input;