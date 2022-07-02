import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import React from "react";

const Footer: React.FC = () => {
  const defaultMessage = '大学生科学与技术协会 信息技术中心';

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`2013-${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: 'https://github.com/nytdc-sast',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
