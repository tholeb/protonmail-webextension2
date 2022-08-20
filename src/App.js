import React from 'react';
import AppBar from './components/AppBar.jsx';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MailLockIcon from '@mui/icons-material/MailLock';
import { default as openProtonMail } from './helpers/openProtonMail.js';


function App() {
	return (
		<div className="App">
			<AppBar />

			<Box
				sx={{
					'& > :not(style)': { m: 1 },
				}}>
				<Fab
					style={{
						position: 'absolute',
						bottom: 5,
						right: 5,
					}}
					onClick={() => openProtonMail()}
					variant="extended" size="medium" color="primary" aria-label="add">
					<MailLockIcon sx={{ mr: 1 }} />
					Login to protonmail
				</Fab>
			</Box>
		</div>
	);
}

export default App;
