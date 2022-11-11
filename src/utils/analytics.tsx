import React from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';
import { useCDNUrl, useWriteKey } from './useConfig';

const AnalyticsContext = React.createContext<{
  analytics: AnalyticsBrowser;
  writeKey: string;
  setWriteKey: (key: string) => void;
  cdnURL: string;
  setCDNUrl: (url: string) => void;
  // @ts-ignore
}>(undefined);

export const AnalyticsProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [writeKey, setWriteKey] = useWriteKey();
  const [cdnURL, setCDNUrl] = useCDNUrl();

  const analytics = React.useMemo(() => {
    // console.log(
    //   `AnalyticsBrowser loading...`,
    //   JSON.stringify({ writeKey, cdnURL })
    // )
    return AnalyticsBrowser.load({ writeKey, cdnURL });
  }, [writeKey, cdnURL]);
  return (
    <AnalyticsContext.Provider value={{ analytics, writeKey, setWriteKey, cdnURL, setCDNUrl }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
  const result = React.useContext(AnalyticsContext);
  if (!result) {
    console.log('Context used outside of its Provider!');
    // throw new Error('Context used outside of its Provider!')
  }
  return result;
};

export function withAnalytics<T extends WithAnalytics = WithAnalytics>(
  WrappedComponent: React.ComponentType<React.PropsWithChildren<T>>,
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  const ComponentWithAnalytics = (props: Omit<T, keyof WithAnalytics>) => {
    // Try to create a nice displayName for React Dev Tools.

    // Fetch the props you want to inject. This could be done with context instead.
    const analytics_props = useAnalytics();

    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...analytics_props} {...(props as T)} />;
  };

  ComponentWithAnalytics.displayName = `WithAnalytics(${displayName})`;

  return ComponentWithAnalytics;
}

export declare type WithAnalytics = {
  analytics: AnalyticsBrowser;
};

export const PAGES = {
  LANDING: 'landing',
};
export default AnalyticsContext;
