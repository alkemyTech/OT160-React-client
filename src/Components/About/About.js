import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import Title from '../Title/Title';
import MembersDisplay from '../Members/MembersDisplay';

const contentMock = {
  data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Morbi nunc tellus, condimentum pellentesque nunc in, volutpat
  laoreet dui. Aliquam metus ipsum, iaculis in imperdiet eu,
  consequat ac purus. Nam sed placerat nibh.`,
  error: '',
};

function About() {
  const [aboutUsContent, setAboutUsContent] = useState('');

  useEffect(() => {
    getAboutUsContent();
  }, []);

  async function getAboutUsContent() {
    const { data, error } = contentMock; // @todo: implement service to request content
    if (error) {
      console.log(error); // @todo: error handling
    } else {
      setAboutUsContent(data);
    }
  }

  return (
    <Stack as="section" className="align-items-center mt-4" gap="4">
      <Title title="Nosotros" />
      <Stack className="align-items-center">
        <h4>Sobre nosotros</h4>
        <p className="text-left w-50">{aboutUsContent}</p>
      </Stack>

      <Stack className="align-items-center" gap="4">
        <Title title="Miembros" />
        <MembersDisplay />
      </Stack>
    </Stack>
  );
}

export default About;
