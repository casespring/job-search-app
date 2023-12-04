import App from "./App";
import JobListContainer from "./JobListContainer";
import NewJobForm from "./NewJobForm"
import BlogContainer from "./BlogContainer";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
             {
                path: "/",
                element: <JobListContainer />
            }, 
            {
                path: "/add-job",
                element: <NewJobForm />
            },
            {
                path: "/learn",
                element: <BlogContainer />
            }
        ]
    }
];

export default routes;
