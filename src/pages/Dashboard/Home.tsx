import PageMeta from "../../components/common/PageMeta";
import SchoolStats from "../../components/dashboard/SchoolStats";
import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import AttendanceChart from "../../components/dashboard/AttendanceChart";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Preschool Dashboard | Management System"
        description="Preschool Management Dashboard"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <SchoolStats />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <AttendanceChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <UpcomingEvents />
        </div>
      </div>
    </>
  );
}
