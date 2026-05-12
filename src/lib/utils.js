import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// Generate a placeholder JWT token for Intercom authentication
// This is a browser-safe implementation that doesn't rely on jsonwebtoken
export function generateIntercomJWT(userData) {
	try {
		// In a browser environment, we'll use a simpler approach
		// For production, consider using a backend API endpoint to generate the token

		// Create a simple identifier for the user
		const userId = userData.id || 'guest-user';
		const timestamp = Math.floor(Date.now() / 1000);

		// Return a placeholder value that won't cause errors
		// In production, replace this with a call to your backend
		console.log('Intercom JWT requested for user:', userId);
		return `placeholder-token-${userId}-${timestamp}`;
	} catch (error) {
		console.error('Error generating Intercom JWT:', error);
		// Return a fallback value to prevent the application from crashing
		return '';
	}
}
