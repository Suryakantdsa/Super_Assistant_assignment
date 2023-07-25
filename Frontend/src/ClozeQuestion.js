import React, { useState } from "react";

const ClozeQuestion = () => {
  const [answers, setAnswers] = useState({
    verb: "",
    noun: "",
    adjective: "",
    verb2: "",
    verb3: "",
    adverb: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the user's answers here or send them to the parent component.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <p>
          The sun <input type="text" name="verb" onChange={handleChange} /> in
          the <input type="text" name="noun" onChange={handleChange} /> and
          gives us <input type="text" name="adjective" onChange={handleChange} />{" "}
          light and warmth. Without the sun, life on Earth would not{" "}
          <input type="text" name="verb2" onChange={handleChange} />. We must{" "}
          <input type="text" name="verb3" onChange={handleChange} /> the sun's
          energy <input type="text" name="adverb" onChange={handleChange} /> to
          power our homes and industries.
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ClozeQuestion;
