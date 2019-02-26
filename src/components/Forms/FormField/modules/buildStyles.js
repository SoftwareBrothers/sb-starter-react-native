import { getIn } from 'formik'
import baseStyles from '../FormField.styles'

const getStyle = (styleName, customStyles) => {
  if (customStyles && customStyles[styleName]) {
    return {
      ...baseStyles[styleName],
      ...customStyles[styleName],
    }
  }

  return baseStyles[styleName]
}

export const buildFieldWrapperStyle = (props) => {
  const { customStyles, formik: { errors, touched }, name } = props
  const showError = getIn(touched, name) && getIn(errors, name)

  const style = [
    getStyle('formFieldWrapper', customStyles),
  ]

  if (showError) {
    style.push(getStyle('formFieldWrapperError', customStyles))
  }

  return style
}

export const buildFieldStyle = ({ customStyles }) => getStyle('formField', customStyles)
