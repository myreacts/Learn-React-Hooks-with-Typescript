import { useState } from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>({} as User[]);

  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;
