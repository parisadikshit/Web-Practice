import {Menu} from 'antd';
import Link from 'next/link';
import {AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import Login from '../pages/login';
const {Item} = Menu;
const TopNav = () =>{
    return (
        <>
        <Menu mode='horizontal center'>
            <Item icon={<AppstoreOutlined/>}>
                <Link href=''>
                    App
                </Link>
            </Item>
            <Item icon={<LoginOutlined/>}>
                <Link href="/login">
                    Login
                </Link>
            </Item>
            <Item icon={<UserAddOutlined/>}>
                <Link href="/register">
                    Register
                </Link>
            </Item>
        </Menu>
        </>
    );
    }


export default TopNav;