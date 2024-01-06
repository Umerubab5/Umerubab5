import React, { useState } from 'react';

const Patternvalidator = () => {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(null);

  const checkBrackets = () => {
    const stack = [];

    for (let i = 0; i < input.length; i++) {
      const currentBracket = input[i];

      if (currentBracket === '[' || currentBracket === '{' || currentBracket === '(') {
        stack.push(currentBracket);
      } else if (currentBracket === ']' || currentBracket === '}' || currentBracket === ')') {
        const lastBracket = stack.pop();

        if (
          (currentBracket === ']' && lastBracket !== '[') ||
          (currentBracket === '}' && lastBracket !== '{') ||
          (currentBracket === ')' && lastBracket !== '(')
        ) {
          setIsValid(false);
          return;
        }
      }
    }

    setIsValid(stack.length === 0);
  };

  return (
    <div className='validator-container'>
      <input className='validator-input'
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setIsValid(null);
        }}
         />
      <button className='validator-button' onClick={checkBrackets}>Check Validity</button>
      {isValid !== null && (
        <p className='validator-message valid'>{isValid ? 'Valid Pattern' : 'Invalid Pattern'}</p>
      )}
    </div>
  );
};

export default Patternvalidator;
