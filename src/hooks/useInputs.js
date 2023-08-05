import { useCallback, useState } from "react";

const useInputs = (initialForm) => {
  const [formData, setFormData] = useState(initialForm);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const reset = useCallback(() => setFormData(initialForm), [initialForm]);
  return { formData, handleChange, reset };
};

export default useInputs;
