import { Container, Box } from "@mui/material"
import { lightBlue } from '@mui/material/colors';


export default function Content({ children }) {

  return (
    <Box sx={{ bgcolor: lightBlue[50], p: 6 }}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}