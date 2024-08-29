import Button from "./Button";

export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-900 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-200">
        Your Projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
