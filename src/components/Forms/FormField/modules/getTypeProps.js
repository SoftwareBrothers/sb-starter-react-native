export default (type) => {
  switch (type) {
    case 'email':
      return {
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
      }
    case 'password':
      return {
        secureTextEntry: true,
        textContentType: 'password',
      }
    default:
      return {}
  }
}
