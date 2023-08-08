import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Main } from '../components/main';

function Home() {
    return( 
       <>
            <Header />
                <Main>
                    <p> Home </p>
                </Main>
            <Footer />
        </>
    )
}

export { Home };