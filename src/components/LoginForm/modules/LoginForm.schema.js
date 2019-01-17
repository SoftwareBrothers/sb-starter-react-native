import * as yup from 'yup'

const PASSWORD_LIMITS = {
  MAX: 40,
  MIN: 6,
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().max(PASSWORD_LIMITS.MAX).min(PASSWORD_LIMITS.MIN),
})

export default LoginFormSchema
