import { useNavigate, useSearchParams } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  return (
    <div>
      <div>test2</div>
      <button onClick={() => navigate("/test")}>跳转到test</button>
    </div>
  );
}
