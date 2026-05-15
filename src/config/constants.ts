/**
 * Application Constants
 * 
 * Centralized constants for the application.
 * Using constants prevents magic strings/numbers and makes refactoring easier.
 */

export const APP_CONSTANTS = {
  // Pagination
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,

  // Course
  MAX_COURSE_TITLE_LENGTH: 100,
  MAX_COURSE_DESCRIPTION_LENGTH: 500,
  MIN_COURSE_PRICE: 0,
  MAX_COURSE_PRICE: 9999,

  // Video
  MAX_VIDEO_DURATION: 7200, // 2 hours in seconds
  SUPPORTED_VIDEO_FORMATS: ["mp4", "webm", "ogg"],

  // User
  MIN_PASSWORD_LENGTH: 8,
  MAX_USERNAME_LENGTH: 50,

  // Session
  SESSION_COOKIE_NAME: "itrax-session",
  SESSION_DURATION: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds

  // API
  API_TIMEOUT: 30000, // 30 seconds
  MAX_RETRIES: 3,
} as const;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  DASHBOARD: "/dashboard",
  COURSES: "/courses",
  COURSE_DETAIL: (id: string) => `/courses/${id}`,
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    ME: "/api/auth/me",
  },
  COURSES: {
    LIST: "/api/courses",
    DETAIL: (id: string) => `/api/courses/${id}`,
    ENROLL: (id: string) => `/api/courses/${id}/enroll`,
  },
  USER: {
    PROFILE: "/api/user/profile",
    UPDATE: "/api/user/update",
  },
} as const;
