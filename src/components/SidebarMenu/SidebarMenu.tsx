import {
  List,
  ListItem,
  Drawer,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 200,
    },
  });

interface Props {
  open: boolean;
  close: () => void;
  list: Record<string, any>;
}

const SidebarMenu = ({
  list,
  open,
  close,
  classes,
}: Props & WithStyles<typeof styles>) => {
  return (
    <Drawer open={open} onClose={close}>
      <List classes={{ root: classes.root }}>
        {Object.keys(list).map((i: string, idx: number) => (
          <ListItem key={`sidebar-menu-item-${idx}`}>
            <Link to={list[i]}>{i.toUpperCase()}</Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(SidebarMenu);
