import React, { useState } from 'react';

const Calculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const [ageCategory, setAgeCategory] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();

    
    const hasBirthdayPassed =
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() >= birthDate.getDate());

    const adjustedAge = hasBirthdayPassed ? ageDiff : ageDiff - 1;

    setAge(adjustedAge);

    
    let category = '';
    if (adjustedAge < 13) {
      category = 'child';
    } 
    else if (adjustedAge < 20) {
      category = 'teenager';
    } else if (adjustedAge < 65) {
      category = 'adult';
    } else {
      category = 'senior';
    }

    setAgeCategory(category);
  };

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge();
  };

  return (
    <div className='input-dob'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your date of birth:
          <input type="date" value={dob} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {age !== null && (
        <div className='result'>
          <p>Your age: {age}</p>
          <p>Your age category: {ageCategory}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
