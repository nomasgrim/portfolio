import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Logo from '../../components/Logo';
import Link from '@material-ui/core/Link';

function App() {
  const linkinUrl = 'https://www.linkedin.com/in/freelancecliff/';
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Typography variant="h1" component="h2" gutterBottom>
          Viking of the Binary Seas
        </Typography>
        <Typography variant="subtitle1">
          <Link href={linkinUrl} color="secondary" target="_blank" rel="noopener">
            linkedin
          </Link>
        </Typography>
      </header>
    </div>
  );
}

export default App;
