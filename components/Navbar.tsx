import { FC } from "react"
import NextLink from "next/link"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar: FC = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                >
                    <FontAwesomeIcon icon={faBars} size='xs' color='white' />
                </IconButton>

                <NextLink href='/'>
                    <Typography variant='h6' color='white'>Cookie Master</Typography>
                </NextLink>

                <div style={{ flex: '1' }}></div>

                <NextLink href='/about'>
                    <Typography variant='h6' color='white'>About</Typography>
                </NextLink>

                <div style={{ margin: '0 10px' }}></div>

                <NextLink href='/contact'>
                    <Typography variant='h6' color='white'>Contact</Typography>
                </NextLink>

                <div style={{ margin: '0 10px' }}></div>

                <NextLink href='/change-theme'>
                    <Typography variant='h6' color='white'>Cambiar Tema</Typography>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}