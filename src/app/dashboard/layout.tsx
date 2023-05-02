import React from 'react';
import Link from 'next/link';
import {
  FiMenu,
  FiSearch,
  FiPieChart,
  FiUser,
  FiShoppingBag,
  FiSettings,
} from 'react-icons/fi';
import Avatar from '@/components/ui/Avatar';
import Textfield from '@/components/ui/Textfield';
import SideMenuItem from './_components/SideMenuItem';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div id="dashboardLayout">
      <nav
        id="navbar"
        className="fixed w-full bg-slate-800 text-white p-3 flex items-center border-b border-slate-400/30"
      >
        <div className="flex items-center space-x-3 w-60">
          <button className="bg-transparent hover:bg-white/25 p-1 rounded-md">
            <FiMenu size={24} />
          </button>

          <Link href="/dashboard" className="text-xl font-bold">
            Dashboard
          </Link>
        </div>

        <div className="flex-grow px-5">
          <Textfield placeholder="Search" prepend={<FiSearch size={18} />} />
        </div>

        <div>
          <div>
            <Avatar src="https://picsum.photos/id/200/300/300" />
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside
          id="sidemenu"
          className="bg-slate-800 text-white border-r border-slate-400/30 min-h-screen w-64 pt-[65px]"
        >
          <div className="py-4 px-3">
            <ul className="space-y-2">
              <li>
                <SideMenuItem
                  href="/dashboard"
                  icon={<FiPieChart />}
                  title="Dashboard"
                />
              </li>
              <li>
                <SideMenuItem
                  href="/dashboard/users"
                  icon={<FiUser />}
                  title="Users"
                  childs={[
                    { href: '/dashboard/users', title: 'List' },
                    { href: '/dashboard/users/roles', title: 'Roles' },
                  ]}
                />
              </li>
              <li>
                <SideMenuItem
                  href="/dashboard/products"
                  icon={<FiShoppingBag />}
                  title="Products"
                />
              </li>
              <li>
                <SideMenuItem
                  href="/dashboard/settings"
                  icon={<FiSettings />}
                  title="Settings"
                />
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-grow bg-slate-900 pt-[65px]">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
