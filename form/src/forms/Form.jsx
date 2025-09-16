import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    gender: "",          // for radio buttons
    agreeTerms: false,   // for checkbox
  });


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // For checkbox, use checked; for others, use value
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text Inputs */}
      <input
        type="text"
        placeholder="Enter Fullname"
        value={formData.fullName}
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Username"
        value={formData.userName}
        name="userName"
        onChange={handleInputChange}
      />
      <br />

      {/* Radio Buttons */}
      <p>Select Gender:</p>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleInputChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleInputChange}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleInputChange}
        />
        Other
      </label>
      <br />

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleInputChange}
        />
        I agree to the terms and conditions
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
