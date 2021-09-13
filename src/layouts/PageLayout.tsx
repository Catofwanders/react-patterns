import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { ROUTES_LIST } from 'routes/routesList';

import { SidebarMenu } from 'components/SidebarMenu';
import { Header } from 'components/Header';

interface Props {
  title: string;
}

const PageLayout = ({ title, children }: React.PropsWithChildren<Props>) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const closeSidebarHandler = React.useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const toggleOpenHandler = React.useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  return (
    <React.Fragment>
      <SidebarMenu
        open={sidebarOpen}
        close={closeSidebarHandler}
        list={ROUTES_LIST}
      />
      <Grid container>
        <Grid item xs={12}>
          <Header toggleSidebar={toggleOpenHandler} title={title} />
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Box>{children}</Box>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PageLayout;
