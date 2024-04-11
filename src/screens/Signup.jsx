import { useEffect, useState } from "react";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { Pressable, StyleSheet } from "react-native";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import InputForm from "../components/InputForm";
import AddButton from "../components/AddButton";
import StyledView from "../styledComponents/StyledView";
import StyledText from "../styledComponents/StyledText";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    //Revisar lógica // Agregar mensaje tipo toast de registro exitoso
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
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <StyledView center>
      <StyledText green title>
        Crear Cuenta:
      </StyledText>
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
      <AddButton title={"Registrarme"} onPress={onSubmit} />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <StyledText red>Ya tengo cuenta: Ir a Login</StyledText>
      </Pressable>
    </StyledView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  descriptionTitle: {
    fontFamily: "Cinzel",
    fontSize: 18,
    color: "green",
    paddingVertical: 2,
    margin: 10,
  },
});
