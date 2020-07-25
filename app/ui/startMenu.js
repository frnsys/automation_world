import t from 'i18n';
import log from 'log';
import React, { Component } from 'react';
import loop from '../loop';
import graph from './3d/graph';
import config from 'config';
import store from 'store';
import jobs from 'data/jobs.json'
import Reference from './reference';

class StartMenu extends Component {
  static requireChoice = true;

  constructor(props) {
    super(props);
    this.state = {
      selectedJob: config.startingJobs[0]
    };
  }

  startGame() {
    store.dispatch({
      type: 'player:hire',
      payload: jobs[this.state.selectedJob]
    });
    graph.reveal(this.state.selectedJob, true);
    loop();
    log('started', {job: this.state.selectedJob});
    this.props.closeModal(Reference);
  }

  render() {
    return <div className='start-menu'>
      <h2>{t('start_welcome')}</h2>
      <p>{t('start_intro')}</p>
      <h3>{t('select_starting_job')}:</h3>
      <ul>
        {config.startingJobs.map((id) => {
          return <li
            key={id}
            onClick={() => this.setState({selectedJob: id})}
            className={this.state.selectedJob == id ? 'selected' : ''}>{t(jobs[id].name)}</li>;
        })}
      </ul>
      <div className='button' onClick={this.startGame.bind(this)}>{t('select_starting_job_button')}</div>
    </div>
  }
}

export default StartMenu;
