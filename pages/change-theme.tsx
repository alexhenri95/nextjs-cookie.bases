import { GetServerSideProps } from 'next'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState, PropsWithChildren } from 'react';
import Cookies from 'js-cookie';
import { Layout } from "../layouts";
import axios from 'axios';

interface Props {
    theme: string
}

const ThemePage: FC<Props> = ({theme}) => {

    const [currentTheme, setCurrentTheme] = useState(theme)


    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value
        setCurrentTheme( selectedTheme )

        localStorage.setItem('theme', selectedTheme)
        Cookies.set('theme', selectedTheme)
    }

    const onClick = async() => {
        const {data} = await axios.get('/api/hello')

        console.log(data);
        
    }

    useEffect(() => {
        console.log('Local S:', localStorage.getItem('theme'));
        console.log('Cookies: ',Cookies.get('theme'));
        
    }, [])

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Thema</FormLabel>
                        <RadioGroup value={currentTheme} onChange={onThemeChange} >
                            <FormControlLabel value='light' control={ <Radio/> } label='Light' />
                            <FormControlLabel value='dark' control={ <Radio/> } label='Dark' />
                            <FormControlLabel value='custom' control={ <Radio/> } label='Custom' />
                        </RadioGroup>
                    </FormControl>

                    <Button onClick={ onClick }>
                        Solicitud
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {

    // const cookies = ctx.req.cookies
    const { theme = 'light' } = ctx.req.cookies

    const validTheme = ['light', 'dark', 'custom']

    return {
        props: {
            theme: validTheme.includes(theme) ? theme : 'light',
        }
    }
}

export default ThemePage