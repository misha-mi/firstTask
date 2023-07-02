import './lib/normalize.sass'

import ReactDOM from 'react-dom/client';

import App from './component/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
