"use client";

import { Inter } from "next/font/google";
import "./assets/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Sidebar } from "flowbite-react";
import { HiFolder, HiDocumentText } from "react-icons/hi";
import { getLibraryPath } from "./library/documentation";
import { AllDocuments } from "./library/all-documents";
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <div style={{ display: "flex" }}>
          <div>
            <Sidebar aria-label="Sidebar with logo branding example" style={{ minHeight: "100vh" }}>
              <Sidebar.Logo href="/" img="/logo.png" imgAlt="CHAOS logo" >
                Library
              </Sidebar.Logo>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  {AllDocuments.map(metadata => <Sidebar.Collapse label={metadata.title} icon={HiFolder} key={metadata.path} open={pathname === getLibraryPath(metadata)}>
                    {metadata.sections.map(section => <Sidebar.Item href={getLibraryPath(metadata, section)} icon={HiDocumentText} key={`${metadata.path}-${section.title}`}>
                      {section.title}
                    </Sidebar.Item>)}
                  </Sidebar.Collapse>)}
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
