import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AuthenticationScreenError500 = React.lazy(() =>
  import("pages/AuthenticationScreenError500"),
);
const AuthenticationScreenError404 = React.lazy(() =>
  import("pages/AuthenticationScreenError404"),
);
const SignInIllustrationOne = React.lazy(() =>
  import("pages/SignInIllustrationOne"),
);
const StepCover = React.lazy(() => import("pages/StepCover"));
const StepBasic = React.lazy(() => import("pages/StepBasic"));
const EcommerceNewProductFour = React.lazy(() =>
  import("pages/EcommerceNewProductFour"),
);
const SignupIllustrationOne = React.lazy(() =>
  import("pages/SignupIllustrationOne"),
);
const SignUpCoverOne = React.lazy(() => import("pages/SignUpCoverOne"));
const LockBasic = React.lazy(() => import("pages/LockBasic"));
const EcommerceNewProductThree = React.lazy(() =>
  import("pages/EcommerceNewProductThree"),
);
const ResetIllustration = React.lazy(() => import("pages/ResetIllustration"));
const ResetCover = React.lazy(() => import("pages/ResetCover"));
const RestBasic = React.lazy(() => import("pages/RestBasic"));
const ApplicationsWizzardThree = React.lazy(() =>
  import("pages/ApplicationsWizzardThree"),
);
const EcommerceNewProductTwo = React.lazy(() =>
  import("pages/EcommerceNewProductTwo"),
);
const SignupIllustration = React.lazy(() => import("pages/SignupIllustration"));
const SignUpCover = React.lazy(() => import("pages/SignUpCover"));
const SignupBasic = React.lazy(() => import("pages/SignupBasic"));
const ApplicationsWizzardTwo = React.lazy(() =>
  import("pages/ApplicationsWizzardTwo"),
);
const SignInIllustration = React.lazy(() => import("pages/SignInIllustration"));
const SignInCover = React.lazy(() => import("pages/SignInCover"));
const SigninBasic = React.lazy(() => import("pages/SigninBasic"));
const EcommerceReferral = React.lazy(() => import("pages/EcommerceReferral"));
const EcommerceOrderDetails = React.lazy(() =>
  import("pages/EcommerceOrderDetails"),
);
const EcommerceOrderList = React.lazy(() => import("pages/EcommerceOrderList"));
const EcommerceProductsList = React.lazy(() =>
  import("pages/EcommerceProductsList"),
);
const EcommerceProductPage = React.lazy(() =>
  import("pages/EcommerceProductPage"),
);
const EcommerceEditproduct = React.lazy(() =>
  import("pages/EcommerceEditproduct"),
);
const EcommerceNewProductOne = React.lazy(() =>
  import("pages/EcommerceNewProductOne"),
);
const EcommerceOverview = React.lazy(() => import("pages/EcommerceOverview"));
const DashboardScreenAlerts = React.lazy(() =>
  import("pages/DashboardScreenAlerts"),
);
const SweetAlerts = React.lazy(() => import("pages/SweetAlerts"));
const DashboardScreenWidgets = React.lazy(() =>
  import("pages/DashboardScreenWidgets"),
);
const DashboardScreenPagesMessages = React.lazy(() =>
  import("pages/DashboardScreenPagesMessages"),
);
const DashboardScreenPricing = React.lazy(() =>
  import("pages/DashboardScreenPricing"),
);
const DashboardScreenProjectsNewProject = React.lazy(() =>
  import("pages/DashboardScreenProjectsNewProject"),
);
const DashboardScreenProjectsTimeline = React.lazy(() =>
  import("pages/DashboardScreenProjectsTimeline"),
);
const DashboardScreenProjectsGeneral = React.lazy(() =>
  import("pages/DashboardScreenProjectsGeneral"),
);
const DashboardScreenAccountSecurity = React.lazy(() =>
  import("pages/DashboardScreenAccountSecurity"),
);
const DashboardScreenAccountInvoice = React.lazy(() =>
  import("pages/DashboardScreenAccountInvoice"),
);
const DashboardScreenAccountBilling = React.lazy(() =>
  import("pages/DashboardScreenAccountBilling"),
);
const DashboardScreenNewUser = React.lazy(() =>
  import("pages/DashboardScreenNewUser"),
);
const DashboardScreenReports = React.lazy(() =>
  import("pages/DashboardScreenReports"),
);
const DashboardScreenAllProjects = React.lazy(() =>
  import("pages/DashboardScreenAllProjects"),
);
const DashboardScreenTeams = React.lazy(() =>
  import("pages/DashboardScreenTeams"),
);
const DashboardScreenProfileOverview = React.lazy(() =>
  import("pages/DashboardScreenProfileOverview"),
);
const DashboardsAutomotive = React.lazy(() =>
  import("pages/DashboardsAutomotive"),
);
const ApplicationsAnalytics = React.lazy(() =>
  import("pages/ApplicationsAnalytics"),
);
const ApplicationsCalendar = React.lazy(() =>
  import("pages/ApplicationsCalendar"),
);
const ApplicationsDataTables = React.lazy(() =>
  import("pages/ApplicationsDataTables"),
);
const ApplicationsWizzardOne = React.lazy(() =>
  import("pages/ApplicationsWizzardOne"),
);
const ApplicationsKanban = React.lazy(() => import("pages/ApplicationsKanban"));
const DashboardScreenCharts = React.lazy(() =>
  import("pages/DashboardScreenCharts"),
);
const DashboardScreenCRM = React.lazy(() => import("pages/DashboardScreenCRM"));
const DashboardsSmartHome = React.lazy(() =>
  import("pages/DashboardsSmartHome"),
);
const DashboardScreenDefault = React.lazy(() =>
  import("pages/DashboardScreenDefault"),
);
const General = React.lazy(() => import("pages/General"));
const Buttons = React.lazy(() => import("pages/Buttons"));
const GeneralNavigation = React.lazy(() => import("pages/GeneralNavigation"));
const Graphs = React.lazy(() => import("pages/Graphs"));
const Sections = React.lazy(() => import("pages/Sections"));
const Tables = React.lazy(() => import("pages/Tables"));
const Listitems = React.lazy(() => import("pages/Listitems"));
const Icons = React.lazy(() => import("pages/Icons"));
const Typography = React.lazy(() => import("pages/Typography"));
const Colors = React.lazy(() => import("pages/Colors"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/listitems" element={<Listitems />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/generalnavigation" element={<GeneralNavigation />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/general" element={<General />} />
          <Route
            path="/dashboardscreendefault"
            element={<DashboardScreenDefault />}
          />
          <Route
            path="/dashboardssmarthome"
            element={<DashboardsSmartHome />}
          />
          <Route path="/dashboardscreencrm" element={<DashboardScreenCRM />} />
          <Route
            path="/dashboardscreencharts"
            element={<DashboardScreenCharts />}
          />
          <Route path="/applicationskanban" element={<ApplicationsKanban />} />
          <Route
            path="/applicationswizzardone"
            element={<ApplicationsWizzardOne />}
          />
          <Route
            path="/applicationsdatatables"
            element={<ApplicationsDataTables />}
          />
          <Route
            path="/applicationscalendar"
            element={<ApplicationsCalendar />}
          />
          <Route
            path="/applicationsanalytics"
            element={<ApplicationsAnalytics />}
          />
          <Route
            path="/dashboardsautomotive"
            element={<DashboardsAutomotive />}
          />
          <Route
            path="/dashboardscreenprofileoverview"
            element={<DashboardScreenProfileOverview />}
          />
          <Route
            path="/dashboardscreenteams"
            element={<DashboardScreenTeams />}
          />
          <Route
            path="/dashboardscreenallprojects"
            element={<DashboardScreenAllProjects />}
          />
          <Route
            path="/dashboardscreenreports"
            element={<DashboardScreenReports />}
          />
          <Route
            path="/dashboardscreennewuser"
            element={<DashboardScreenNewUser />}
          />
          <Route
            path="/dashboardscreenaccountbilling"
            element={<DashboardScreenAccountBilling />}
          />
          <Route
            path="/dashboardscreenaccountinvoice"
            element={<DashboardScreenAccountInvoice />}
          />
          <Route
            path="/dashboardscreenaccountsecurity"
            element={<DashboardScreenAccountSecurity />}
          />
          <Route
            path="/dashboardscreenprojectsgeneral"
            element={<DashboardScreenProjectsGeneral />}
          />
          <Route
            path="/dashboardscreenprojectstimeline"
            element={<DashboardScreenProjectsTimeline />}
          />
          <Route
            path="/dashboardscreenprojectsnewproject"
            element={<DashboardScreenProjectsNewProject />}
          />
          <Route
            path="/dashboardscreenpricing"
            element={<DashboardScreenPricing />}
          />
          <Route
            path="/dashboardscreenpagesmessages"
            element={<DashboardScreenPagesMessages />}
          />
          <Route
            path="/dashboardscreenwidgets"
            element={<DashboardScreenWidgets />}
          />
          <Route path="/sweetalerts" element={<SweetAlerts />} />
          <Route
            path="/dashboardscreenalerts"
            element={<DashboardScreenAlerts />}
          />
          <Route path="/ecommerceoverview" element={<EcommerceOverview />} />
          <Route
            path="/ecommercenewproductone"
            element={<EcommerceNewProductOne />}
          />
          <Route
            path="/ecommerceeditproduct"
            element={<EcommerceEditproduct />}
          />
          <Route
            path="/ecommerceproductpage"
            element={<EcommerceProductPage />}
          />
          <Route
            path="/ecommerceproductslist"
            element={<EcommerceProductsList />}
          />
          <Route path="/ecommerceorderlist" element={<EcommerceOrderList />} />
          <Route
            path="/ecommerceorderdetails"
            element={<EcommerceOrderDetails />}
          />
          <Route path="/ecommercereferral" element={<EcommerceReferral />} />
          <Route path="/signinbasic" element={<SigninBasic />} />
          <Route path="/signincover" element={<SignInCover />} />
          <Route path="/signinillustration" element={<SignInIllustration />} />
          <Route
            path="/applicationswizzardtwo"
            element={<ApplicationsWizzardTwo />}
          />
          <Route path="/signupbasic" element={<SignupBasic />} />
          <Route path="/signupcover" element={<SignUpCover />} />
          <Route path="/signupillustration" element={<SignupIllustration />} />
          <Route
            path="/ecommercenewproducttwo"
            element={<EcommerceNewProductTwo />}
          />
          <Route
            path="/applicationswizzardthree"
            element={<ApplicationsWizzardThree />}
          />
          <Route path="/restbasic" element={<RestBasic />} />
          <Route path="/resetcover" element={<ResetCover />} />
          <Route path="/resetillustration" element={<ResetIllustration />} />
          <Route
            path="/ecommercenewproductthree"
            element={<EcommerceNewProductThree />}
          />
          <Route path="/lockbasic" element={<LockBasic />} />
          <Route path="/signupcoverone" element={<SignUpCoverOne />} />
          <Route
            path="/signupillustrationone"
            element={<SignupIllustrationOne />}
          />
          <Route
            path="/ecommercenewproductfour"
            element={<EcommerceNewProductFour />}
          />
          <Route path="/stepbasic" element={<StepBasic />} />
          <Route path="/stepcover" element={<StepCover />} />
          <Route
            path="/signinillustrationone"
            element={<SignInIllustrationOne />}
          />
          <Route
            path="/authenticationscreenerror404"
            element={<AuthenticationScreenError404 />}
          />
          <Route
            path="/authenticationscreenerror500"
            element={<AuthenticationScreenError500 />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
