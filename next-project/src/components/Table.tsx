"use client";

import Client from "@/core/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface ITableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table({
  clients,
  selectedClient,
  deletedClient,
}: ITableProps) {
  const showActions = selectedClient || deletedClient;
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
        <tr>
          <th className="text-left p-4">ID</th>
          <th className="text-left p-4">Name</th>
          <th className="text-left p-4">Age</th>
          {showActions ? <th className="p-4">Actions</th> : false}
        </tr>
      </thead>
      <tbody>
        {clients?.map((client, i) => {
          return (
            <tr
              key={client.id}
              className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
            >
              <td className="text-left p-4">{client.id}</td>
              <td className="text-left p-4">{client.name}</td>
              <td className="text-left p-4">{client.age}</td>
              <td className="flex justify-center">
                {selectedClient ? (
                  <button
                    onClick={() => selectedClient(client)}
                    className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}
                  >
                    {EditIcon}
                  </button>
                ) : (
                  false
                )}
                {deletedClient ? (
                  <button
                    onClick={() => deletedClient(client)}
                    className="flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50"
                  >
                    {TrashIcon}
                  </button>
                ) : (
                  false
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
