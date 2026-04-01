import {Box, Typography} from "@mui/joy";
import CustomButton from "@components/ui/CustomButton.tsx";

interface ErrorFallbackProps {
  textError: string
  onClick: () => void
}

export default function ErrorFallback({ textError, onClick }: ErrorFallbackProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 2 }}>
      <Typography level="h2">Сталася помилка</Typography>
      <Typography level="body-md">{ textError }</Typography>
      <CustomButton text="Повторити" onClick={onClick} />
    </Box>
  )
}
