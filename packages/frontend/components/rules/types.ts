import { ua } from 'public/locales/ua';

const { generalRules } = ua.rules;
export type ListTypes = keyof Pick<
  typeof generalRules.paragraphs,
  'thirdParties' | 'yourRights' | 'whatWeGet' | 'why'
>;
