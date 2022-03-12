import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tabs, Tab } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

const pages = ['Products', 'Pricing', 'Blog'];

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function NavTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" indicatorColor="secondary" textColor='secondary'>
        <LinkTab label="Page One" href="/drafts" />
        <LinkTab label="Page Two" href="/trash" />
        <LinkTab label="Page Three" href="/spam" />
      </Tabs>
    </Box>
  );
}

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{variant: "denze"}}>
          <Typography variant="h6" display="inline-block" sx={{}}>
            SAMPLE LOGO
          </Typography>
          <Box color="secondary" display="block">s</Box>
          <NavTabs />
          <IconButton color="secondary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header