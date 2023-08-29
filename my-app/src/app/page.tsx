import Image from 'next/image'
import Link from 'next/link';
import React, { Children, useState } from 'react';
import Description from './components/description/description';
import Header from './components/header/header';
import Page from './mynotes/page';


export default function Home() {
  return (
    <>
      <Header/>
      <Description/>
    </>
  )
}
