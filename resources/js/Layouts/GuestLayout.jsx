
import { Link } from '@inertiajs/react';
import styled from 'styled-components';
const Logo = styled.img`

`
const Container = styled.div`
background: url("./img/7.jpg") no-repeat center center;
    background-size: cover; /* Or use 'contain' */
`


export default function Guest({ children }) {
    return (
        <Container className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <Logo src="./img/model4.png" className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </Container>
    );
}
