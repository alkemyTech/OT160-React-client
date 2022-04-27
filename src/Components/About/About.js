import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import Title from '../Title/Title';
import MembersDisplay from '../Members/MembersDisplay';
import { getDataOrganization } from '../../Services/organizationService';
import PublicHeader from '../Header/PublicHeader';

function About() {
  const [aboutUsContent, setAboutUsContent] = useState('');

  useEffect(() => {
    getAboutUsContent();
  }, []);

  async function getAboutUsContent() {
    const { data, error } = await getDataOrganization();
    if (error) {
      console.log(error); // @todo: error handling
    } else {
      const content = data.long_description;
      setAboutUsContent(content);
    }
  }

  return (
    <div>
      <PublicHeader />
      <Stack as="section" className="align-items-center mt-4" gap="4">
        <Title title="Sobre nosotros" />
        <Stack className="align-items-center align-self-center w-75">
          <div dangerouslySetInnerHTML={{ __html: aboutUsContent }}></div>
        </Stack>

        <Stack className="align-items-center" gap="4">
          <Title title="Miembros" />
          <MembersDisplay />
        </Stack>
      </Stack>
    </div>
  );
}

export default About;
