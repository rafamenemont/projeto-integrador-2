import * as yup from 'yup'

export const signupSchema = yup.object().shape({
    nickname: yup.string().required("Digite o seu Nickname"),
    fullname: yup.string().required("Digite o seu nome"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().min(6,'Senha Curta').required("Senha obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'senhas devem ser iguais')
})