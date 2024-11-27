import { useEffect, useRef, useState } from 'react';

const PAGE_SIZE = 6;

export default function HackersPage() {
  const [isLoading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIds, setJobIds] = useState([]);
  const [page, setPage] = useState(1);
  const didMountRef = useRef(false);

  useEffect(() => {
    // console.log('calling main ');
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        setJobIds(data);
        // console.log('API got response', data);
        didMountRef.current = true;
      });
  }, []);

  useEffect(() => {
    if (didMountRef.current === true) {
      getJobs(0).then();
    }
  }, [jobIds]);

  const getJobs = async (pageNumber) => {
    const apiResult = await Promise.all(
      jobIds
        .slice(pageNumber, pageNumber + PAGE_SIZE)
        .map((x) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${x}.json`).then((res) => res.json())
        )
    );

    setJobs([...jobs, ...apiResult]);

    setLoading(false);
    setPage(pageNumber);
  };
  return (
    <>
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
        <div>
          {jobs.map((x, i) => {
            return <div key={i}>aaa</div>;
          })}
          <button
            onClick={async () => {
              await getJobs(page + PAGE_SIZE);
            }}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}
