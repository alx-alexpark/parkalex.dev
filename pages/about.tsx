import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Contact - Alex Park',
      }}
    >
      <h1>Contact</h1>
      <p>
        If for some random reason you want to contact me then you are at the
        right place
      </p>
    </Layout>
  );
};

export default About;
