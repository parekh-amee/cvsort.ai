import React from 'react';
import { LandingWrapper } from './Landing.style';
import Layout from 'layout/Layout';
import { Typography } from 'antd';


const { Title } = Typography;

const LandingPage: React.FC<{}> = () => {
  return (
    <Layout>
      <LandingWrapper>
        <div id="home-left">
          <Title>Let Us Sort the Resumes</Title>
          <p>
            Designed by over-enthusiastic engineers, our AI-powered platform instantly provides you
            with eligible candidates from your submitted resumes.
          </p>
          <p>Save 90% of your time by leaving the tedious task to the machine.</p>
        </div>
       
      </LandingWrapper>
    </Layout>
  );
};
export default LandingPage;
