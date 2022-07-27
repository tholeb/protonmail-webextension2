import AppBar from './components/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MailLockIcon from '@mui/icons-material/MailLock';

function App() {
	return (
		<div className="App">
			<AppBar/>

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
					variant="extended" size="medium" color="primary" aria-label="add">
					<MailLockIcon sx={{ mr: 1 }} />
					Login to protonmail
				</Fab>
			</Box>
		</div>
	);
}

export default App;
