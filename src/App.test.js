import { render, screen } from '@testing-library/react';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import EmpData from './components/EmpData';
import Parent from './components/Parent';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EmpData component properly', () => {
  render(
    <Provider store={store}>
      <EmpData />
    </Provider>
  );
  const abc = screen.getByText('Add New Employee');
  expect(abc).toBeInTheDocument();
});

test('renders Parent component properly', () => {
  render(
    <Provider store={store}>
      <Parent />
    </Provider>
  );
  const abc = screen.getByText('This is Parent component.');
  expect(abc).toBeInTheDocument();
});




// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
