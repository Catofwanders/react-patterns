import {
  List,
  ListItem,
  Drawer,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { removeSlashes } from 'utils';

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
  const LinkContent = ({ item }: Record<string, any>) => (
    <List classes={{ root: classes.root }}>
      {Object.keys(item).map((i: string, idx: number) =>
        i === 'link' ? (
          <Typography variant="body2" color="textPrimary">
            {removeSlashes(item[i].toUpperCase())}
          </Typography>
        ) : (
          <ListItem key={`sidebar-menu-item-${idx}`}>
            <Link to={item[i]}>
              <Typography variant="body2" color="textPrimary">
                {i.toUpperCase()}
              </Typography>
            </Link>
          </ListItem>
        ),
      )}
    </List>
  );

  return (
    <Drawer open={open} onClose={close}>
      <List classes={{ root: classes.root }}>
        {Object.keys(list).map((i: string, idx: number) => (
          <ListItem key={`sidebar-menu-item-${idx}`}>
            {typeof list[i] === 'object' ? (
              <LinkContent item={list[i]} />
            ) : (
              <Link to={list[i]}>
                <Typography variant="body2" color="textPrimary">
                  {i.toUpperCase()}
                </Typography>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(SidebarMenu);
