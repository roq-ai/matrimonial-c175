interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin User'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin User', 'Profile Manager', 'Matchmaker', 'Customer Support'],
  tenantName: 'Company',
  applicationName: 'matrimonial',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
