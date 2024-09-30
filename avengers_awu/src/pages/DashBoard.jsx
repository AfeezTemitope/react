import Header from "../components/Header";
import DashHeader from "../components/DashHeader";
import ProfileSection from "../components/ProfileSection";
import Headlines from "../components/Headlines";
import Head from "../components/Head";

const DashBoard = () => {
    return (
        <div className="DashBoard">
            <Head />
            <DashHeader/>
            <Headlines/>
            <ProfileSection/>
        </div>
    )
}

export default DashBoard