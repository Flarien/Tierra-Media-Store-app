import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string()
    .required("Email es requerido")
    .email("Ingrese un email válido"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener mínimo 6 caracteres"),
  confirmPassword: string()
  //El método oneOf compara con la referencia (en este caso: password)
    .oneOf([ref("password"), null], "La contraseña no coincide")
    .required("valide la contraseña"),
});
