import { Input, type InputProps } from '@mui/joy'
import { forwardRef } from 'react'

interface CustomInputProps extends InputProps {
  disabled?: boolean
  required?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  return (
    <Input
      color="neutral"
      disabled={props.disabled}
      required={props.required}
      variant="soft"
      {...props}
      ref={ref}
    />
  )
})

CustomInput.displayName = 'CustomInput'

export default CustomInput
