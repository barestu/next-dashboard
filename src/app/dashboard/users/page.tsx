import React from 'react';
import { FiPlus, FiDownload, FiEdit, FiTrash } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Textfield from '@/components/ui/Textfield';
import Button from '@/components/ui/Button';
import THCell from '../_components/Table/THCell';
import TDCell from '../_components/Table/TDCell';
import Avatar from '@/components/ui/Avatar';

export default function UsersList() {
  return (
    <div>
      <Card>
        <Breadcrumbs
          className="mb-3"
          items={[
            { href: '/dashboard', title: 'Dashboard' },
            { href: '/dashboard/users', title: 'Users' },
          ]}
        />

        <h2 className="text-2xl font-bold mb-3">Users</h2>

        <div className="flex justify-between mb-3">
          <Textfield placeholder="Search for users" />
          <div className="space-x-3">
            <Button>
              <FiPlus size={18} /> Add User
            </Button>
            <Button className="bg-slate-600 hover:bg-slate-400">
              <FiDownload size={18} /> Export
            </Button>
          </div>
        </div>

        <div>
          <table className="w-full">
            <thead className="text-left">
              <tr>
                <THCell>Name</THCell>
                <THCell>Role</THCell>
                <THCell>Status</THCell>
                <THCell>Last Updated</THCell>
                <THCell></THCell>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, idx) => (
                <tr key={idx} className="border-b border-slate-400/30">
                  <TDCell>
                    <div className="flex items-center">
                      <Avatar src="https://picsum.photos/200/300" />
                      <div className="ml-3">
                        <div>Bob Monroe</div>
                        <div className="italic text-slate-400/80">
                          bob@email.com
                        </div>
                      </div>
                    </div>
                  </TDCell>
                  <TDCell>Admin</TDCell>
                  <TDCell>Active</TDCell>
                  <TDCell className="w-1">{Date()}</TDCell>
                  <TDCell className="w-1">
                    <div className="space-x-3">
                      <Button className="bg-blue-600 hover:bg-blue-800">
                        <FiEdit size={18} /> Edit user
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-800">
                        <FiTrash size={18} /> Delete user
                      </Button>
                    </div>
                  </TDCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
