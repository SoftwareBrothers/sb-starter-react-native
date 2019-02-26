import React from 'react'
import PropTypes from 'prop-types'
import { Button, View } from 'react-native'
import { Formik } from 'formik'
import { FormField } from '../Forms'
import validationSchema from './modules/LoginForm.schema'
import styles from './LoginForm.styles'

const LoginForm = ({ disabled, initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleSubmit }) => (
      <View>
        <FormField name='email' type='email' customStyles={styles} disabled={disabled} />
        <FormField name='password' type='password' customStyles={styles} disabled={disabled} />
        <Button onPress={handleSubmit} title='Submit' disabled={disabled} />
      </View>
    )}
  </Formik>
)

LoginForm.propTypes = {
  disabled: PropTypes.bool,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
