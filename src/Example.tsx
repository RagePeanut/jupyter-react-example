import React from 'react';
import { render } from 'react-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Jupyter } from '@jupyter-react/widgets';
import { Cell, CellControl } from '@jupyter-react/widgets';
import { Commands, CommandsControl } from '@jupyter-react/widgets';
import { Console, ConsoleControl } from '@jupyter-react/widgets';
import { Dialog, DialogControl } from '@jupyter-react/widgets';
import { FileBrowser, FileBrowserControl } from '@jupyter-react/widgets';
import NotebookExample from './notebook/NotebookExample';
import { Settings, SettingsControl } from '@jupyter-react/widgets';
import { Terminal, TerminalControl } from '@jupyter-react/widgets';
import { Terminals, TerminalsControl } from '@jupyter-react/widgets';

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
  };
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

export default function VerticalTabs() {
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
        <Tab label="Commands" {...a11yProps(2)} />
        <Tab label="Console" {...a11yProps(3)} />
        <Tab label="Dialog" {...a11yProps(4)} />
        <Tab label="File Browser" {...a11yProps(5)} />
        <Tab label="Notebook" {...a11yProps(1)} />
        <Tab label="Settings" {...a11yProps(6)} />
        <Tab label="Terminal" {...a11yProps(7)} />
        <Tab label="Terminals" {...a11yProps(8)} />
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
          <NotebookExample />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <SettingsControl />
          <Settings />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <TerminalControl />
          <Terminal />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <TerminalsControl />
          <Terminals />
        </TabPanel>
      </div>
    </div>
  );
}

const TOKEN = '60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6';

const el = document.createElement('div');
document.body.appendChild(el);

render(
  <>
    <Jupyter token={TOKEN} collaborative={true} terminals={true}>
      <Typography variant="h4" gutterBottom>
        Jupyter React Examples
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        © Datalayer, 2021
      </Typography>
      <VerticalTabs/>
    </Jupyter>
  </>
  ,
  el
);
