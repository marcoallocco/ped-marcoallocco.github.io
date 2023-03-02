import { useRouteError } from 'react-router-dom';
import MainNavigation from '../MainNavigation';

import PageContent from '../PageContent';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
