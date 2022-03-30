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
      <p>
        <strong>
          If you are to contact me through an insecure medium (SMS, Email),
          encrypt your messages with my GPG Key
        </strong>
      </p>
      <p>
        Pull it from a{' '}
        <a href="https://pgp.mit.edu/pks/lookup?op=get&search=0x24A3B83FB26AA900">
          Keyserver
        </a>
      </p>
      <code>
        gpg --keyserver keyserver.ubuntu.com --recv-keys 24a3b83fb26aa900
      </code>
      <p>
        Or <a href="/gpgkey.txt">download it directly</a>
      </p>
      <p>
        <b>
          For maximum security, verify key integrity over multiple keyserversy
        </b>
      </p>
      <code>Email: public@funny-bunny.ninja</code>
    </Layout>
  );
};

export default About;
