import { Button, type ButtonProps } from '@mui/joy'

interface CustomButtonProps extends ButtonProps {
  text: string
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Button disabled={props.disabled} loading={props.loading} onClick={props.onClick} {...props}>
      {props.text}
    </Button>
  )
}
