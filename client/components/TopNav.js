import {Menu} from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import Login from '../pages/login';
const {Item} = Menu;
const TopNav = () =>{
    const [current, setCurrent] = useState(" ")

    useEffect(()=>{
        
        if(typeof window){
            console.log(window.location.pathname)
            setCurrent(window.location.pathname)
        }
        
    },[typeof window])
    console.log('current',current);
    return (
        <>
        <Menu mode='horizontal center' selectedKeys={[current]}>
            <Item key='/' onClick={(e)=>setCurrent(e.key)} icon={<AppstoreOutlined/>}>
                <Link href='/'>
                    App
                </Link>
            </Item>
            <Item key='/login' onClick={(e)=>setCurrent(e.key)} icon={<LoginOutlined/>}>
                <Link href="/login">
                    Login
                </Link>
            </Item>
            <Item key='/register' onClick={(e)=>setCurrent(e.key)} icon={<UserAddOutlined/>}>
                <Link href="/register">
                    Register
                </Link>
            </Item>
        </Menu>
        </>
    );
    }


export default TopNav;