import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  // 副作用: 与函数计算不相干的操作 eg: 修改标题、修改cookies...
  // useEffect是通用的副作用函数, 组件每渲染一次就会执行一次
  // useEffect的第二个参数用于指定依赖，依赖发生改变的时候副作用才会执行，如果为空，该副作用只在渲染时执行一次

  // 用途: 发生请求、修改DOM、打log...

  useEffect(() => {
    // 严格模式下，React会在实际的setup之前多运行一次setup和cleanup。
    // 这是一项压力测试，用于验证Effect的逻辑是否正确实现。
    // mounting->unmounting->mounting
    console.log("mounting");
    console.log("Users", users);

    // 返回值用于在组件卸载时清理副作用
    return () => console.log("unmounting");
  }, [users]);

  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;
