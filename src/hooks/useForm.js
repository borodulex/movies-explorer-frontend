import { useCallback, useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
};

export const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleCustomMessage = (target) => {
    const customMessage = target.getAttribute('data-patterncustommessage');
    const isPatternMismatch = target.validity.patternMismatch;
    customMessage && isPatternMismatch
      ? target.setCustomValidity(customMessage)
      : target.setCustomValidity('');
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    handleCustomMessage(target);

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  };
};
