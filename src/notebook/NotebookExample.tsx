import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Notebook } from '@jupyter-react/widgets';
import NotebookExampleHeader from './NotebookExampleHeader';

import './../../style/index.css';

const NotebookExample = () => {
  return (
      <Paper elevation={3} style={{ width: '100%'}}>
        <NotebookExampleHeader />
        <Notebook path={'test.ipynb'}/>
      </Paper>
  );
}

export default NotebookExample;
