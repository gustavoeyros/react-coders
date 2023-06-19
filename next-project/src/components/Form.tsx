import Button from "./Button";
import { useState } from "react";
import Entry from "./Entry";
import Client from "@/core/Client";

interface IFormProps {
  client: Client;
  changeClient?: (client: Client) => void;
  canceled?: () => void;
}

export default function Form({ client, canceled, changeClient }: IFormProps) {
  console.log(client.age);
  const id = client?.id;
  const [name, setName] = useState(client.name ?? "");
  const [age, setAge] = useState(client.age ?? 0);
  return (
    <div>
      {id ? (
        <Entry text="Código" readOnly value={id} className="mb-5" />
      ) : (
        false
      )}
      <Entry text="Nome" value={name} changeValue={setName} className="mb-5" />
      <Entry
        text="Idade"
        type="number"
        value={age}
        changeValue={setAge}
        className="mb-5"
      />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() =>
            changeClient ? changeClient(new Client(name, age, id)) : false
          }
        >
          {id ? "Update" : "Save"}
        </Button>
        <Button onClick={canceled}>Cancel</Button>
      </div>
    </div>
  );
}
