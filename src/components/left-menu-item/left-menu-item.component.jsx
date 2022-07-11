import './left-menu-item.styles.css';

const LeftMenuItem = (props) => (
  <li className={props.className}>
    <span className="label">{props.label}</span>
    <span className="count">{props.count}</span>
  </li>
);

export default LeftMenuItem;
