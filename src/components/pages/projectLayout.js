import React from 'react';
import Project from './project.js';
import { Grid, Panel, Placeholder, Row, Col } from 'rsuite';
import TextfastImg from '../../images/textfast-img.png';


const Project1 = props => (
  // <Panel {...props} bordered header="Textfast">
  //   <p>Ever want to test your texting speed and compare it to your friends? Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.
  //     Or challenge your friends in TextBattle mode (coming soon) to battle against each other live.
  //     See who can text the fastest and gain all the glory in Textfast</p>
  // </Panel>
  <Panel shaded bordered bodyFill style={{  width: 240 }}>
  <img src={TextfastImg} height="240" />
  <Panel header="Textfast">
    <p>
      <small>
        Texting speed game
      </small>
    </p>
  </Panel>
</Panel>
);

const Project2 = props => (
  // <Panel {...props} bordered header="Textfast">
  //   <p>Ever want to test your texting speed and compare it to your friends? Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.
  //     Or challenge your friends in TextBattle mode (coming soon) to battle against each other live.
  //     See who can text the fastest and gain all the glory in Textfast</p>
  // </Panel>
  <Panel shaded bordered bodyFill style={{ width: 240 }}>
  <img src={TextfastImg} height="240" />
  <Panel header="Textfast">
    <p>
      <small>
        Texting speed game
      </small>
    </p>
  </Panel>
</Panel>
);

const Project3 = props => (
  // <Panel {...props} bordered header="Textfast">
  //   <p>Ever want to test your texting speed and compare it to your friends? Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.
  //     Or challenge your friends in TextBattle mode (coming soon) to battle against each other live.
  //     See who can text the fastest and gain all the glory in Textfast</p>
  // </Panel>

  <Panel shaded bordered bodyFill style={{ width: 240 }}>
    <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US">
  <img src={TextfastImg} height="240" />
  <Panel header="Textfast">
    <p>
      <small>
        Texting speed game
      </small>
    </p>
  </Panel>
  </a>
</Panel>

);


export default function ProjectLayout(){
    return (
      <Grid fluid>
        <Row>
          <Col md={8}>
            <Project1 />
          </Col>
          <Col md={8}>
            <Project2 />
          </Col>
          <Col md={8}>
            <Project3 />
          </Col>
        </Row>
        </Grid>
    );
}
