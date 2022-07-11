import './styles/app.css';

import Header from './components/header/header.component';
import LeftMenu from './components/left-menu/left-menu.component';
import Main from './components/main/main.component';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
