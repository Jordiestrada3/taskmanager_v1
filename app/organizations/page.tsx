
import Header from "../components/Header";


export const dynamic = "force-dynamic"; // To show latest data in the build

export default async function OrganizationsPage() {
  return (
    <div className="site">
      <Header />
      <main style={{ margin: 10 }}>
        <h1>Organizations</h1>
      </main>
    </div>
  );
}
