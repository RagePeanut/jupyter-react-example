import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopOutlined from '@material-ui/icons/StopOutlined';
import QuestionAnswerOutlined from '@material-ui/icons/QuestionAnswerOutlined';
import { notebookActions, selectNotebook } from '@jupyter-react/widgets';
import { Terminal } from '@jupyter-react/widgets';

const terminal = <Terminal/>

const NotebookExampleHeader = () => {
  const [state, setState] = useState({
    terminal: false,
  });
  const dispatch = useDispatch();
  const notebook = selectNotebook();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Grid container spacing={3} style={{ padding: '30px 110px 0px 30px' }}>
        <Grid item xs={6}>
          <Grid container justify="flex-start">
            <Button
              variant="text"
              color="default"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => dispatch(notebookActions.insertBelow.started())}
              >
                Text
            </Button>
            <Button
              variant="text"
              color="default"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => dispatch(notebookActions.insertBelow.started())}
              >
                Markdown
            </Button>
            <Button 
              variant="text"
              color="default"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => dispatch(notebookActions.insertBelow.started())}
              >
                Code
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end">
            <FormGroup row>
              <FormControlLabel                
                control={<Switch checked={state.terminal} onChange={handleChange} name="terminal" />}
                label={<Typography variant="body2" display="block">Terminal</Typography>}
              />
            </FormGroup>            
            {(notebook.kernelStatus === 'idle') &&
              <Button 
                variant="outlined"
                color="default"
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => dispatch(notebookActions.runAll.started())}
                >
                  Run all
              </Button>
             }
            {(notebook.kernelStatus === 'busy') &&
              <Button 
                variant="outlined"
                color="secondary"
                startIcon={<StopOutlined />}
                onClick={() => dispatch(notebookActions.interrupt.started())}
                >
                  Stop
              </Button>
             }
            {((notebook.kernelStatus !== 'idle') && (notebook.kernelStatus !== 'busy')) &&
              <Button 
                variant="outlined"
                color="primary"
                startIcon={<QuestionAnswerOutlined />}
                >
              </Button>
             }
          </Grid>
        </Grid>
      </Grid>
      {state.terminal && terminal}
    </>
  )
}

export default NotebookExampleHeader;
