import { Menu } from "antd";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const { Item, SubMenu } = Menu;
const TopNav = () => {
  const [current, setCurrent] = useState(" ");
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const { user } = state;
  useEffect(() => {
    if (typeof window) {
      console.log(window.location.pathname);
      setCurrent(window.location.pathname);
    }
  }, [typeof window]);
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };
  return (
    <>
      <Menu mode="horizontal center" selectedKeys={[current]}>
        <Item
          key="/"
          onClick={(e) => setCurrent(e.key)}
          icon={<AppstoreOutlined />}
        >
          <Link href="/">App</Link>
        </Item>
        {user == null && (
          <>
            <Item
              key="/login"
              onClick={(e) => setCurrent(e.key)}
              icon={<LoginOutlined />}
            >
              <Link href="/login">Login</Link>
            </Item>
            <Item
              key="/register"
              onClick={(e) => setCurrent(e.key)}
              icon={<UserAddOutlined />}
            >
              <Link href="/register">Register</Link>
            </Item>
          </>
        )}
        {user !== null && (
        //   <SubMenu icon={<CoffeeOutlined />} title={user && user.name} className="float-right">
            <Item
              onClick={logout}
              icon={<LoginOutlined />}
              className="float-right"
            >
              Log out
            </Item>
        //   </SubMenu>
        )}
      </Menu>
    </>
  );
};

export default TopNav;
