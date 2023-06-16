"use client";

import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";

const clients = [
  new Client("Gusta", 18, "1"),
  new Client("José", 18, "2"),
  new Client("Alex", 18, "3"),
  new Client("Pedro", 18, "4"),
];

export default function Home() {
  const selectedClient = (client: Client) => {
    console.log(client.name);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Layout title="Título!">
        <Table clients={clients} selectedClient={selectedClient} />
      </Layout>
    </div>
  );
}
