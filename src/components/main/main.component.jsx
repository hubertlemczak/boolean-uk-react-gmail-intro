import './main.styles.css';

import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png';

import EmailToolbar from '../email-toolbar/email-toolbar.component';
import EmailHeader from '../email-header/email-header.component';
import ComposeEmail from '../compose-email/compose-email.component';

const Main = () => (
  <main className="email-view">
    <EmailToolbar />
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <EmailHeader />
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
      <ComposeEmail />
    </article>
  </main>
);

export default Main;
