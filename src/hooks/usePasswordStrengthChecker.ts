import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export type UsePasswordStrengthChecker = () => {
  strength?: string;
  strengthChecker: (password: string) => void; 
};

const usePasswordStrengthChecker: UsePasswordStrengthChecker = () => {
  const [strength, setStrength] = useState<string>();

  const strengthChecker = (password: string) => {      
    let strengthValue = 0;
    let regexList = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    let strengthText = ["", "Unacceptable", "Weak", "Average", "Good", "Strong"];

    regexList.forEach((regex) => {
      if (new RegExp(regex).test(password)) {
          strengthValue += 1;
      }
    });
    if(password.length >=8){
      strengthValue += 1;
    }
    setStrength(strengthText[strengthValue]);
  };

  return {
    strength,
    strengthChecker
  };
};

export default usePasswordStrengthChecker;