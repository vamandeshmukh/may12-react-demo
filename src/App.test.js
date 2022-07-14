
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import EmpData from './components/EmpData';
import Parent from './components/Parent';
import store from './redux/store';

// syntax 
// test(arg1, arg2);
// test('test description in English', () => { });

test('Parent component renders properly.', () => {
  render(
    <Provider store={store}>
      <Parent />
    </Provider>
  );
  const dataToTest = screen.getByText('This is Parent component.');
  expect(dataToTest).toBeInTheDocument();
});

test('EmpData component renders properly.', () => {
  render(
    <Provider store={store}>
      <EmpData />
    </Provider>
  );
  const dataToTest = screen.getByText('Add New Employee');
  expect(dataToTest).toBeInTheDocument();
});

// test('EmpData component renders properly.', () => {
//   render(
//     <Provider store={store}>
//       <EmpData />
//     </Provider>
//   );
//   const dataToTest = screen.getByText('Add New Customer');
//   expect(dataToTest).not.toBeInTheDocument();
// });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });






// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
