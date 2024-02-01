import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthConext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, userName) => {
    setError(null);
    setPending(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      if (!response.user) {
        throw new Error("Üyelik işlemi gerçekleştirilemedi");
      }

      // displayName özelliğini kontrol et
      console.log(response.user.displayName);

      // updateProfile fonksiyonunu kullanmadan önce displayName özelliğini kontrol et
      if (response.user.displayName !== userName) {
        await updateProfile(response.user, {
          displayName: userName,
        });
      }

      dispatch({ type: "LOGIN", payload: response.user });
      setError(null);
      setPending(false);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
      setPending(false);
    }
  };

  return { error, pending, signup };
};
