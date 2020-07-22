import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container className="my-4">
      <h2 className="mb-4">GitHub Jobs Finder</h2>
      <JobsPagination page={page} setPage={setPage} />
      {loading && <h4 className="ml-3">Loading your dream jobs...</h4>}
      {error && <h4 className="ml-3">Oops. Please refresh.</h4>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} />
    </Container>
  );
}

export default App;
