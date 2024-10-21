import React from 'react';

const Loading: React.FC = () => {
	return (
		<div style={styles.container}>
			<div style={styles.spinner}></div>
			<p>Loading...</p>
		</div>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column' as 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		backgroundColor: '#f0f0f0',
	},
	spinner: {
		width: '50px',
		height: '50px',
		border: '5px solid #ccc',
		borderTop: '5px solid #1d72b8',
		borderRadius: '50%',
		animation: 'spin 1s linear infinite',
	},
};

export default Loading;