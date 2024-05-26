import StudentSearch from "./StudentSearch";
import StudentTableData from "./StudentTableData";

const StudentTable = () => {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#8f00cc]">Students</span> of the Year
          </h2>
          <StudentSearch />
        </div>
        <StudentTableData />
      </div>
    </section>
  );
};

export default StudentTable;
