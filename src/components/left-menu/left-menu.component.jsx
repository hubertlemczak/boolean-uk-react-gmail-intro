import './left-menu.styles.css';

import LeftMenuItem from '../left-menu-item/left-menu-item.component';

const LeftMenu = () => (
  <nav className="left-menu">
    <ul className="inbox-list">
      <LeftMenuItem className="item active" label="Inbox" count="3" />
      <LeftMenuItem className="item " label="Starred" count="2" />
      <li className="item toggle">
        <label htmlFor="hide-read">Hide read</label>
        <input id="hide-read" type="checkbox" defaultChecked={false} />
      </li>
    </ul>
  </nav>
);

export default LeftMenu;
