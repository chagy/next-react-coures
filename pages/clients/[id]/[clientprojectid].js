import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The project page for a specific</h1>
    </div>
  );
}

export default SelectedClientProjectPage;