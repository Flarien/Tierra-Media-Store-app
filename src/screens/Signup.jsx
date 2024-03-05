import { useEffect, useState } from "react";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    //Revisar lógica
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password });
      console.log("Registro exitoso");
    } catch (err) {
      console.log("path", err.path);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <View>
      <Text style={{ margin: 20, fontWeight: "bold" }}>
        Registro de nuevo usuario:
      </Text>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Contraseña"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <InputForm
        label={"Confirmar contraseña"}
        error={errorConfirmPassword}
        onChange={setConfirmPassword}
        isSecure={true}
      />
      <SubmitButton title={"Registrarse"} onPress={onSubmit} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
