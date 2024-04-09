export default function Education() {
  return (
    <div className="h-full bg-secondary text-primary flex flex-col px-10 py-4">
      <h1 className="text-4xl font-bold py-10">Education</h1>
      <h1 className="text-xl italic">September 2019 - December 2023</h1>
      <div className="bg-primary text-secondary rounded-lg">
        <div className=" bg-accent w-full rounded-t-lg p-4 text-primary">
          <h1 className="text-2xl font-bold">
            Honours Bachelor of Science, Computer Science
          </h1>
          <h2 className="text-xl font-bold">University of Toronto</h2>
        </div>
        <div className="p-4 space-y-1">
          <h3 className="text-lg font-bold">
            Specialization in Software Engineering
          </h3>
          <p>GPA: 3.1/4.0</p>
        </div>
      </div>
    </div>
  );
}
