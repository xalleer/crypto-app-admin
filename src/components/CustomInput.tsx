import {Input} from "@mui/joy";

interface CustomInputProps {
    type: string;
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
}

export default function CustomInput(props: CustomInputProps) {
    return (
        <Input
          color="neutral"
          disabled={props.disabled}
          required={props.required}
          variant="soft"
          type={props.type}
          placeholder={props.placeholder}>
        </Input>
    )
}
