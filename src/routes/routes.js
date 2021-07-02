import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Login from "@/pages/Login.vue";
import Tasks from "@/pages/Tasks.vue"
import Reset from "@/pages/Reset.vue";
import Register from "@/pages/Register.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Users from "@/pages/Users.vue";
import AMMVR from "@/pages/Am_mvr.vue";
import MIDDAYMVR from "@/pages/Midday_mvr.vue";
// import AM_standard from "@/pages/Am_standard.vue";
// import Midday_standard from "@/pages/Midday_standard.vue";
import Food_safety from "@/pages/Foodsafety.vue";
import Greenbook from "@/pages/Greenbook.vue";
import Redbook from "@/pages/Redbook.vue";
import AMMVRVIEW from "@/pages/view/Am_mvr_view.vue";
import AmMvrPdf from "@/pages/view/Am_mvr_pdf.vue";
import MIDDAYMVRVIEW from "@/pages/view/Midday_mvr_view.vue";
import MiddayMvrPdf from "@/pages/view/Midday_mvr_pdf.vue";
import Food_safety_View from "@/pages/view/Food_safety_view.vue";
import Food_safety_pdf from "@/pages/view/Food_safety_pdf.vue";
import Greenbook_View from "@/pages/view/Greenbook_view.vue";
import Greenbook_pdf from "@/pages/view/Greenbook_pdf.vue";
import Redbook_View from "@/pages/view/Redbook_view";
import Redbook_pdf from "@/pages/view/Redbook_pdf.vue";

const routes = [{
        path: "/",
        name: "Login",
        component: Login,
        // redirect: {
        //     name: "Login"
        // },
        meta: {
            public: true, // Allow access to even if not logged in
            onlyWhenLoggedOut: true
        },
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: Login,
    //     meta: {
    //         public: true, // Allow access to even if not logged in
    //         onlyWhenLoggedOut: true
    //     }
    // },
    {
        path: "/reset",
        name: "Reset",
        component: Reset,
        meta: {
            public: true, // Allow access to even if not logged in
            onlyWhenLoggedOut: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/amvrpdf",
        name: "AMMVR Report Pdf",
        component: AmMvrPdf
    },
    {
        path: "/midaymvrpdf",
        name: "MidayMVR Report Pdf",
        component: MiddayMvrPdf
    },
    {
        path: "/krsspdf",
        name: "Food Safety Report Pdf",
        component: Food_safety_pdf
    },
    {
        path: "/greenbookpdf",
        name: "Greenbook Report Pdf",
        component: Greenbook_pdf
    }, {
        path: "/redbookpdf",
        name: "Redbook Report Pdf",
        component: Redbook_pdf
    },
    {
        path: "/admin",
        component: DashboardLayout,

        children: [{
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "tasks",
                name: "Action Tasks",
                component: Tasks
            },
            {
                path: "users",
                name: "Manage Users",
                component: Users
            },
            {
                path: "amvrfeedback",
                name: "AM MVR Feedback Report",
                component: AMMVR
            },

            {
                path: "midamvfeedback",
                name: "MIDDAY MVR Feedback Report",
                component: MIDDAYMVR
            },

            {
                path: "krss",
                name: "FOOD SAFETY REPORT",
                component: Food_safety
            },
            {
                path: "kdo",
                name: "GREENBOOK CHECKLIST",
                component: Greenbook
            },
            {
                path: "redbook",
                name: "REDBOOK CHECKLIST",
                component: Redbook
            },
            {
                path: "amvrfeedbackview/:id",
                name: "AM MVR Feedback View",
                component: AMMVRVIEW
            },


            {
                path: "middaymvrfeedbackview/:id",
                name: "MIDDAY MVR Feedback View",
                component: MIDDAYMVRVIEW
            },

            {
                path: "foodreportview/:id",
                name: "FOOD SAFETY REPORT View",
                component: Food_safety_View
            },
            {
                path: "greenbookview/:id",
                name: "GREENBOOK CHECKLIST View",
                component: Greenbook_View
            },
            {
                path: "redbookview/:id",
                name: "REDBOOK CHECKLIST View",
                component: Redbook_View
            }
        ]
    }
];

export default routes;