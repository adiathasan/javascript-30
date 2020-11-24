import React from 'react';
import {
	AppBar,
	Button,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { purple } from '@material-ui/core/colors';

const primary = purple['900'];

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
	},
	title: {
		flex: 1,
		textTransform: 'uppercase',
		letterSpacing: '.2rem',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const NavMui = () => {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (e) => {
		setAnchorEl(true);
	};

	const handleClose = () => {
		setAnchorEl(false);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' style={{ backgroundColor: primary }}>
				<Toolbar>
					<IconButton
						edge='start'
						color='inherit'
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						Now
					</Typography>
					{auth ? (
						<>
							<IconButton onClick={handleMenu} color='inherit'>
								<AccountCircle />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								getContentAnchorEl={null}
								anchorOrigin={{
									vertical: 'center',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>Logout</MenuItem>
							</Menu>
						</>
					) : (
						<Button color='inherit'>Login</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavMui;
