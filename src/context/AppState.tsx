import { NextRouter } from 'next/router';
import { Session } from 'next-auth';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { TelemetryProvider } from '../components/AppTelemetry/TelemetryProvider';

interface Props {
  children: ReactNode;
  pageTitle: string;
  requireAuth: boolean;
  router: NextRouter;
  session: Session;
}

/* istanbul ignore next */
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { setupMsw } = require('../core/msw');
  void setupMsw();
}

export default function AppState({ children, pageTitle, router }: Props) {
  const queryConfig = {
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  };
  const queryClient = new QueryClient(queryConfig);

  return (
    <TelemetryProvider router={router} pageTitle={pageTitle}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TelemetryProvider>
  );
}
