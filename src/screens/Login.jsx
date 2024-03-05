import { useState } from 'react';
import { useLoginMutation } from '../services/authService';
import { StyleSheet, Text, View } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton';

const Login = () => {

  //Revisar lógica de estados y métodos
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [triggerSignup, result] = useLoginMutation();

    const onSubmit = () => {
      triggerSignup({ email, password });
    };

  return (
    <View>
      <Text>Login</Text>
      <InputForm label={"Email"} error={""} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={""}
        onChange={setPassword}
        isSecure={true}
      />
      <SubmitButton title={"Ingresar"} onPress={onSubmit} />
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "60%",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
