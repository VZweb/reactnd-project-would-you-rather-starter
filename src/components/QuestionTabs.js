import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Question from "./Question";
import { answeredQuestions, unansweredQuestions } from "../utils/utils";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function QuestionsTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Unanswered Questions" {...a11yProps(0)} />
          <Tab label="Answered Questions" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div className="Center-panel">
        <TabPanel value={value} index={0} component={"span"}>
          {props.unansweredQuestionsArr.map((question) => {
            return (
              <Question
                key={question.id}
                author={question.author}
                question={question}
              />
            );
          })}
        </TabPanel>
      </div>
      <div className="Center-panel">
        <TabPanel value={value} index={1} component={"span"}>
          {props.answeredQuestionsArr.map((question) => {
            return (
              <Question
                key={question.id}
                author={question.author}
                question={question}
              />
            );
          })}
        </TabPanel>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, loginUser }) {
  const answeredQuestionsArr = answeredQuestions(questions, loginUser);
  const unansweredQuestionsArr = unansweredQuestions(questions, loginUser);

  return {
    answeredQuestionsArr,
    unansweredQuestionsArr,
    loginUser,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionsTabs);
