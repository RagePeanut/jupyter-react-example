import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Cell, CellControl } from '@datalayer-jupyter/widgets';
import { Commands, CommandsControl } from '@datalayer-jupyter/widgets';
import { Console, ConsoleControl } from '@datalayer-jupyter/widgets';
import { Dialog, DialogControl } from '@datalayer-jupyter/widgets';
import { FileBrowser, FileBrowserControl } from '@datalayer-jupyter/widgets';
import { Notebook, NotebookControl } from '@datalayer-jupyter/widgets';
import { Settings, SettingsControl } from '@datalayer-jupyter/widgets';
import { Terminal, TerminalControl } from '@datalayer-jupyter/widgets';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Cell" {...a11yProps(0)} />
        <Tab label="Commands" {...a11yProps(1)} />
        <Tab label="Console" {...a11yProps(2)} />
        <Tab label="Dialog" {...a11yProps(3)} />
        <Tab label="File Browser" {...a11yProps(4)} />
        <Tab label="Notebook" {...a11yProps(5)} />
        <Tab label="Settings" {...a11yProps(6)} />
        <Tab label="Terminal" {...a11yProps(7)} />
      </Tabs>
      <div style={{ width: '100vh' }}>
        <TabPanel value={value} index={0}>
          <CellControl />
          <Cell />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CommandsControl />
          <Commands />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ConsoleControl />
          <Console />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DialogControl/>
          <Dialog />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FileBrowserControl />
          <FileBrowser />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <NotebookControl />
          <Notebook path='ping.ipynb' ipywidgets="modern" />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <SettingsControl />
          <Settings />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <TerminalControl />
          <Terminal />
        </TabPanel>
      </div>
    </div>
  );
}

export default Gallery;
