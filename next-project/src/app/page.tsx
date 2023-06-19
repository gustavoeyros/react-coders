"use client";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import useClients from "@/hooks/useClients";

export default function Home() {
  const {
    selectedClient,
    deletedClient,
    client,
    clients,
    newClient,
    saveClient,
    tableVisible,
    showTable,
  } = useClients();
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Layout title="Title!">
        {tableVisible ? (
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
            canceled={() => showTable()}
          />
        )}
      </Layout>
    </div>
  );
}
