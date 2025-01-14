import Img from "./layouts/Img";
import Avatar from "../assets/avatar.png";
import studentsData from "../utils/fakeData/students.json"
import { Fragment } from "react";
Fragment

const StudentTableData = () => {
    const students = studentsData.students
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
        {students.map((classes) =>
                Object.keys(classes).map((value) => (
                  <Fragment key={value}>
                    <tr className="bg-white/5">
                      <td
                        className="p-5 text-sm md:text-xl capitalize"
                        colSpan={4}
                      >
                        {value}
                      </td>
                    </tr>
                    {classes[value].map((student) => (
                      <tr
                        key={student.id}
                        className="border-b border-[#7ECEB529]"
                      >
                        <td className="p-5 text-sm md:text-xl">{student.id}</td>
                        <td className="p-5 text-sm md:text-xl">
                          <div className="flex space-x-3 items-center">
                            <Img
                              className="w-8 h-8"
                              src={Avatar}
                              width={32}
                              height={32}
                              alt="John Smith"
                            />
                            <span className="whitespace-nowrap">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                          {student.score}
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                          {student.percentage}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))
              )}
       
        </tbody>
      </table>
    </div>
  );
};

export default StudentTableData;
