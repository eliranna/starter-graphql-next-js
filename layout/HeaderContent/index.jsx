import React from 'react';
import Image from 'next/image';
import { Avatar, Menu, Dropdown, Row, Col, Divider } from 'antd';

import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
  LogoutOutlined,
  BellOutlined,
} from '@ant-design/icons';
import photo from '@/styles/images/photo.png';
import airbnbLogo from '@/styles/images/airbnb-logo.svg';

import uniqueId from '@/utils/uinqueId';

export default function HeaderContent() {
  const { SubMenu } = Menu;

  const profileDropdown = (
    <div className="profileDropdown whiteBox shadow" style={{ minWidth: '200px' }}>
      <div className="pad15">
        <Avatar size="large" className="last" src={photo} style={{ float: 'left' }} />
        <div className="info">
          <p className="strong">Mark Williams</p>
          <p>mark.williams@gmail.com</p>
        </div>
      </div>
      <div className="line"></div>
      <div>
        <Menu>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className="line"></div>
      <div>
        <Menu>
          <Menu.Item icon={<LogoutOutlined />} key={`${uniqueId()}`} onClick={() => {}}>
            logout
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={18}>
        <Image src={airbnbLogo} alt="Picture of the author" width={120} height={70} />
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="headerIcon">
          <Dropdown overlay={profileDropdown} trigger={['click']} placement="bottomRight">
            {/* <Badge dot> */}
            <Avatar
              src={
                <Image
                  src={photo}
                  alt="Picture of the author"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              }
            />
            {/* </Badge> */}
          </Dropdown>

          <Avatar icon={<AppstoreOutlined />} />

          <Avatar icon={<BellOutlined />} />
        </div>
      </Col>
    </Row>
  );
}
