import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { FeedbackProvider } from './context/Feedback';
import { store } from './redux/store';
import App from './App';
import 'antd/dist/antd.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<FeedbackProvider>
					<App />
				</FeedbackProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
