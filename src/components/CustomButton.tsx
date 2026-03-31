import {Button} from "@mui/joy";

interface CustomButtonProps {
    text: string
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
    variant: 'plain' | 'outlined' | 'solid'
}

export default function CustomButton(props: CustomButtonProps) {
    return (
        <Button
          variant={props.variant}
          disabled={props.disabled}
          loading={props.loading}
          onClick={props.onClick}>
          { props.text }
        </Button>
    )
}
