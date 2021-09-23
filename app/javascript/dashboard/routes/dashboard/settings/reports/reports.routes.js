import Index from './Index';
import AgentReports from './AgentReports';
import LabelReports from './LabelReports';
import InboxReports from './InboxReports';
import CsatResponses from './CsatResponses';
import SettingsContent from '../Wrapper';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/reports'),
      component: SettingsContent,
      props: {
        headerTitle: 'REPORT.HEADER',
        icon: 'ion-arrow-graph-up-right',
      },
      children: [
        {
          path: '',
          redirect: 'overview',
        },
        {
          path: 'overview',
          name: 'settings_account_reports',
          roles: ['administrator'],
          component: Index,
        },
      ],
    },
    {
      path: frontendURL('accounts/:accountId/reports'),
      component: SettingsContent,
      props: {
        headerTitle: 'CSAT_REPORTS.HEADER',
        icon: 'ion-happy-outline',
      },
      children: [
        {
          path: 'csat',
          name: 'csat_reports',
          roles: ['administrator'],
          component: CsatResponses,
        },
      ],
    },
    {
      path: frontendURL('accounts/:accountId/reports'),
      component: SettingsContent,
      props: {
        headerTitle: 'AGENT_REPORTS.HEADER',
        icon: 'ion-people',
      },
      children: [
        {
          path: 'agent',
          name: 'agent_reports',
          roles: ['administrator'],
          component: AgentReports,
        },
      ],
    },
    {
      path: frontendURL('accounts/:accountId/reports'),
      component: SettingsContent,
      props: {
        headerTitle: 'LABEL_REPORTS.HEADER',
        icon: 'ion-pricetags',
      },
      children: [
        {
          path: 'label',
          name: 'label_reports',
          roles: ['administrator'],
          component: LabelReports,
        },
      ],
    },
    {
      path: frontendURL('accounts/:accountId/inbox'),
      component: SettingsContent,
      props: {
        headerTitle: 'INBOX_REPORTS.HEADER',
        icon: 'ion-archive',
      },
      children: [
        {
          path: 'inbox',
          name: 'inbox_reports',
          roles: ['administrator'],
          component: InboxReports,
        },
      ],
    },
  ],
};
