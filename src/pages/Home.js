import { Box, FormControl, FormHelperText, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

let text = '';

const handleChange = (event) => {
    text = event.target.value;
}

const handleReverse = () => {
    const textReversed = text.split('').reverse().join('');
    return textReversed;
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        navigator.clipboard.writeText(handleReverse());
    }
});

const listener = (event) => {
    if (event.key === 'Enter') {
        toast.success('Text copied! 😊', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

const Home = () => {

    const [stateText, setStateText] = useState('');

    const handleChangeState = (event) => {
        const textReversed = event.target.value.split('').reverse().join('');
        setStateText(textReversed);
    }

    useEffect(() => {
        window.addEventListener('keydown', listener);
    }, []);

    return (
        <>
            <FormControl style={{ padding: "0 100px", position: 'absolute', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '20px' }} >
                <Box bg='tomato' w='100%' p={4} color='white'>
                    {stateText}
                </Box>
                <Input type='text' placeholder='Masukkan text yang anda ingin balik...' id="inputText" autoComplete='off' onChange={(event) => {
                    handleChange(event);
                    handleChangeState(event);
                }} />
                <FormHelperText>Tekan enter untuk meng-copy text yang terbalik.</FormHelperText>
            </FormControl>
        </>
    )
}

export default Home