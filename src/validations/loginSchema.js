import { object, string } from "yup";

export const loginSchema = object().shape({
  //Revisar. Agregar mensaje de, ej, "Usuario inexistente"
  email: string()
    .required("Email es requerido")
    .email("Ingrese un email válido"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener mínimo 6 caracteres"),
});
