import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email:yup.string().email("E-mail inválido").required("E-mail é obrigatorio"),
    password: yup.string().required("Senha é obrigatoria")
})