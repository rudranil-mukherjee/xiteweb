// This is a test script to demonstrate how the JWT token generation works
// and how it would be used with Intercom.
// This file is not meant to be included in the production build.

import { generateIntercomJWT } from './utils';

// Mock user data
const mockUser = {
  id: 'user-123',
  email: 'user@example.com',
  name: 'Example User',
  created_at: Math.floor(Date.now() / 1000)
};

// Generate JWT token
const token = generateIntercomJWT(mockUser);

console.log('Generated JWT token for Intercom:', token);

// Example of how this token would be used with Intercom
console.log('\nExample Intercom initialization with JWT:');
console.log(`
Intercom({
  app_id: 'J_jIZ035_nN5jE6ZCtiMqVO373EpdnYv2RgN9Sn6',
  api_base: 'https://api-iam.intercom.io',
  alignment: 'right',
  horizontal_padding: 20,
  vertical_padding: 20,
  custom_launcher_selector: '#intercom-custom-launcher',
  hide_default_launcher: false,
  action_color: '#6b46c1',
  background_color: '#343541',
  intercom_user_jwt: '${token}',
  session_duration: 86400000, // 1 day in milliseconds
  // Non-sensitive attributes can be passed directly
  user_id: '${mockUser.id}',
  name: '${mockUser.name}',
  created_at: ${mockUser.created_at}
});
`);

// Note: In a real application, the API secret would be stored in environment variables
// and the user data would come from your authentication system.
