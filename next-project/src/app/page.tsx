"use client";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import { useState } from "react";

const clients = [
  new Client("Gusta", 18, "1"),
  new Client("José", 18, "2"),
  new Client("Alex", 18, "3"),
  new Client("Pedro", 18, "4"),
];

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  const selectedClient = (client: Client) => {
    setClient(client);
    setVisible("form");
  };

  const deletedClient = (client: Client) => {
    console.log(client.name);
  };

  const saveClient = (client: Client) => {
    console.log(client);
    setVisible("table");
  };

  const newClient = () => {
    setClient(Client.empty());
    setVisible("form");
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Layout title="Title!">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button onClick={newClient} className="mb-4" color="green">
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            changeClient={saveClient}
            canceled={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
