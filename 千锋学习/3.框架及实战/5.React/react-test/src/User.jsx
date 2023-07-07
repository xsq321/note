import { useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  console.log("子组件params参数：", params.id);
  return (
    <div>
      <div>user</div>
    </div>
  );
}
