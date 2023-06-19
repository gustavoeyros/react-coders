import ClientRepository from "@/core/ClientRepository";
import ClientCollection from "@/backend/db/ClientCollection";
import { useState, useEffect } from "react";
import Client from "@/core/Client";
import useVisible from "./useVisible";

export default function useClients(){
    const repo: ClientRepository = new ClientCollection();
    const {tableVisible,  showTable, showForm } = useVisible()
    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([Client.empty()]);

  
    useEffect(() => {
      getAll();
    }, []);
  
    const getAll = () => {
      repo.getAll().then((clients) => {
        setClients(clients);
        showTable()
      });
    };
  
    const selectedClient = (client: Client) => {
      setClient(client);
      showForm()
    };
  
    const deletedClient = async (client: Client) => {
      await repo.delete(client);
      getAll();
    };
  
    const saveClient = async (client: Client) => {
      await repo.save(client);
      getAll();
      showTable()
    };
  
    const newClient = () => {
      setClient(Client.empty());
      showForm()
    };


    return{
        client,
        clients,
        newClient,
        saveClient,
        deletedClient,
        selectedClient,
        getAll,
        tableVisible,
        showTable
    }
}