import { useEffect, useState } from "react";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { ActivityIndicator, Pressable } from "react-native";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { colors } from "../global/colors";
import InputForm from "../components/InputForm";
import AddButton from "../components/AddButton";
import { insertSession } from "../db";
import StyledView from "../styledComponents/StyledView";
import StyledText from "../styledComponents/StyledText";

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");

      loginSchema.validateSync({ password, email });

      triggerLogin({ email, password });
      console.log("Registro exitoso");
    } catch (err) {
      console.log("path", err.path);

      if (err.message === "Usuario no registrado") {
        setErrorMail("Este usuario no está registrado.");
      } else {
        switch (err.path) {
          case "email":
            setErrorMail(err.message);
            break;
          case "password":
            setErrorPassword(err.message);
            break;
          default:
            break;
        }
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken,
      })
        .then((result) => console.log(result))
        .catch((err) => console.log(err.message));
    }
  }, [result]);

  return (
    <StyledView center>
      <StyledText green title>
        Login
      </StyledText>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      {result.isLoading ? (
        <StyledView center>
          <ActivityIndicator size={100} color={colors.back_green} />
        </StyledView>
      ) : (
        <AddButton title={"Login"} onPress={onSubmit} />
      )}
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <StyledText red>Aún no tengo cuenta: ir a registrarme</StyledText>
      </Pressable>
    </StyledView>
  );
};

export default Login;