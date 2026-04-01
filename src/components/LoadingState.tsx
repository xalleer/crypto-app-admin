import {Box} from "@mui/joy";
import CircularProgress from '@mui/joy/CircularProgress';
import '../styles/components/_loading-state.scss'
export default function LoadingState() {
  return (
    <Box className="container">
      <CircularProgress thickness={1} />
    </Box>
  )
}
