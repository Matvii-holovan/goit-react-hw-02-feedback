import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul className={css.listBtn}>
          <li>
            <button className='btn btn_good'>Good</button>
          </li>
          <li>
            <button className='btn btn_neutral'>Neutral</button>
          </li>
          <li>
            <button className='btn btn_bad'>Bad</button>
          </li>
        </ul>
        <h2>Statisticks</h2>
        <ul className={css.list}>
            <li>g</li>
            <li>n</li>
            <li>b</li>
        </ul>
      </div>
    );
  };
};

export default Feedback;