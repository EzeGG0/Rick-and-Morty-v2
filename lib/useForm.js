import { useState } from 'react';

const useForm = (init = {}) => {
  const [inputs, setInputs] = useState(init);

  function handleChange(e) {
    const { value, name } = e.target;

    let formattedValue = value;
    const shouldFormat = name === 'Episode' || name === 'Season';
    if (shouldFormat) {
      const maxLength = 2; // Máxima longitud permitida para el campo
      formattedValue = value.padStart(maxLength, '0');
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: formattedValue,
    }));
  }

  return {
    inputs,
    handleChange,
  };
};

export default useForm;
