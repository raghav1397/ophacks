import React from 'react';
import '../style/App.css';
import CreateUserPage from '../pages/CreateUserPage';
import PageTemplate from '../pages/PageTemplate';

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <CreateUserPage />
      </PageTemplate>
    </div>
  );
}

export default App;
