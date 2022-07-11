import './compose-email.styles.css';

import backArrow from '../../assets/icons/back-arrow.png';
import Icon from './icon.component';

const ComposeEmail = () => (
  <section className="compose-email">
    <div>
      <div className="compose-email-sender-info">
        <img src={backArrow} alt="reply" width={20} />
        <strong>v</strong>
        <p>Freepik Company (no-reply@freepik.com)</p>
      </div>
    </div>
    <textarea name="composeEmail" id="composeEmail"></textarea>
    <div className="buttons">
      <button className="send-email button-left button">Send</button>
      <button className="send-email-more button-right button">v</button>
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </div>
  </section>
);

export default ComposeEmail;
