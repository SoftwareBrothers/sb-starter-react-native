import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'
import { connect } from 'formik'
import { buildFieldStyle, buildFieldWrapperStyle } from './modules/buildStyles'
import getTypeProps from './modules/getTypeProps'

const FormField = (props) => {
  const {
    customStyles,
    disabled,
    formik: {
      handleBlur,
      handleChange,
      values,
    },
    name,
    type,
    ...restOfProps
  } = props

  return (
    <View style={buildFieldWrapperStyle(props)}>
      <TextInput
        style={buildFieldStyle(props)}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}

        editable={!disabled}
        {...getTypeProps(type)}
        {...restOfProps}
      />
    </View>
  )
}

FormField.propTypes = {
  customStyles: PropTypes.object,
  disabled: PropTypes.bool,
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default connect(FormField)
