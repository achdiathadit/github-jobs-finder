import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function navbar() {
  return (
    <Navbar bg='dark' variant='dark' className='navbar mb-3' sticky='top'>
      <Navbar.Brand href='/'>GitHub Jobs Finder</Navbar.Brand>
    </Navbar>
  );
}
