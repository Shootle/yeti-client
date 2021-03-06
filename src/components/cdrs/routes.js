import Cdrs from './Cdrs';
import {
  requiresAuth,
  filterBlockedPages,
  beforeGuardEnchancer,
} from '../../router/helpers';
import {
  STATISTICS_PATHS,
  STATISTICS_ROUTE_NAMES,
  GENERAL_ROUTE_NAMES,
} from '../../constants/routing';
import ViewFilters from '../ViewFilters/ViewFilters';

// eslint-disable-next-line
export const routes = [
  {
    path: STATISTICS_PATHS.CDRS,
    name: STATISTICS_ROUTE_NAMES.CDRS,
    components: {
      default: Cdrs,
      [GENERAL_ROUTE_NAMES.VIEW_FILTERS]: ViewFilters,
    },
    beforeEnter: beforeGuardEnchancer([requiresAuth, filterBlockedPages]),
  },
];
