/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View } from 'react-native';
import React, { useState } from 'react';

import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, 'Minimum 4 characters needed.').max(16, 'Maximum 16 characters required.').required('Length is required.'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (uppercase) {
      characterList += upperCaseChars;
    }
    if (lowercase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
