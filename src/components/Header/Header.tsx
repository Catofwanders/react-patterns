import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  title: string;
  toggleSidebar: () => void;
}

const Header = ({ title, toggleSidebar }: Props) => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
