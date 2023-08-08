import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Main } from '../components/main';
import {useEffect} from 'react';
import { api } from '../services/api';

function Portfolio() {

    useEffect(() => {
        const load = async ( ) => {

        }
        load()
    },[])
  return (
    <>
      <Header />
      <Main>
        <p>Portfolio</p>
      </Main>
      <Footer />
    </>
  );
}

export { Portfolio };