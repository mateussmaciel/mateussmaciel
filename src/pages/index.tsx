import styled from '../styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Mateus Maciel</title>
      </Head>
      <h1 className={styled.title}>      
        Hello World
      </h1>
    </>
  )
}
