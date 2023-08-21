const mapping: Record<string, string> = {
  companies: 'company',
  matches: 'match',
  profiles: 'profile',
  queries: 'query',
  suggestions: 'suggestion',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
