import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/cardRepository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
const cardRepository = new CardRepository();


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

