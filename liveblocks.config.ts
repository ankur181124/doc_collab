import { createClient,LiveList } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_prod_uWcpTeWpCChIkAtsANXFaGdKLzU_M83LrqX982OaxPTZYDwwSh9LpehWs7aPRhOD",
});

type Presence = {
  isTyping: boolean;
};
type Storage = {
    todos: LiveList<{ text: string }>;
  };
  

export const {
  suspense: { RoomProvider, useOthers, useUpdateMyPresence,useStorage,useMutation },
} = createRoomContext<Presence,Storage>(client);
