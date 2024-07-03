"use client";

import { Inter } from "next/font/google";
import "./assets/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiFolder  } from "react-icons/hi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <div style={{ display: "flex" }}>
          <div>
            <Sidebar aria-label="Sidebar with logo branding example" style={{ minHeight: "100vh" }}>
              <Sidebar.Logo href="#" img="/logo.png" imgAlt="CHAOS logo" >
                Library
              </Sidebar.Logo>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="/library/test" icon={HiChartPie}>
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards}>
                    Kanban
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiFolder}>
                    Inbox
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUser}>
                    Users
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    Sign In
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiTable}>
                    Sign Up
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>

          </div>
          <div style={{ flex: "1 1 0" }}>
            <div style={{ padding: 20 }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
