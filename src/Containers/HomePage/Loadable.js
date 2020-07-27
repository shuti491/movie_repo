/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'react-loadable';
import LoadingIndicator from 'Components/LoadingIndicator';
//  const LoadableComponent = Loadable({
//   loader: () => import('./index'),
//   loading() {
// 		return <div>Loading...</div>
// 	}
// });
 
// export default {LoadableComponent};

export default loadable(() => import('./index'), {
  loading() {
    		return <div>Loading...</div>
}
});
