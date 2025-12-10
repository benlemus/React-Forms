import { useState } from "react";
import "./NewBoxForm.css";

export default function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({
      width: formData.width,
      height: formData.height,
      backgroundColor: formData.backgroundColor,
    });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="100px"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="100px"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="green"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button className="formBtn">Add Box</button>
    </form>
  );
}
