import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';

const el = document.getElementById('root')!;
const root = createRoot(el);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <section className='hero is-small'>
          <div className='hero-body has-text-centered'>
            <h1 className='title has-text-primary'>JBook</h1>
            <h3 className='subtitle is-italic has-text-light'>
              Write JS and JSX directly in your browser!
            </h3>
          </div>
        </section>
        <hr style={{ margin: '16px 0' }} />
        <CellList />
      </div>
    </Provider>
  );
};

root.render(<App />);
