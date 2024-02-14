import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import Exercises from "../Exercises/Exercises";
import Notes from "../Notes/Notes";
import Timetable from "../Timetable/Timetable";
import Dishes from "../Dishes/Dishes";
import Dish from "../Dishes/Dish";
import Programs from "../Programs/Programs";
import Program from "../Programs/Program";
import Achievements from "../Achievements/Achievements";
import Notifications from "../Notifications/Notifications";
import Settings from "../Settings/Settings";
import Friends from "../Friends/Friends";
import Friend from "../Friends/Friend";
// import { Demon Code } from "erbi-demon-dom"

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/program" element={<Program />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
