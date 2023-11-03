import { useState } from 'react';

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const changeCallingState = () => {
    setIsCalling(!isCalling);
  };

  const changePhoneNumber = (tecla: string) => {
    if (!tecla) setPhoneNumber(tecla);
    if (phoneNumber.length === 9) setPhoneNumber(phoneNumber.slice(-1));
    setPhoneNumber(phoneNumber + tecla);
  };

  return {
    isCalling,
    phoneNumber,
    changeCallingState,
    changePhoneNumber,
  };
}
