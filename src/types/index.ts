/**
 * Global Type Definitions
 * 
 * Shared types used across the application.
 * Keeping types centralized prevents duplication and ensures consistency.
 */

// ============================================================================
// Common Types
// ============================================================================

export type ID = string | number;

export type Timestamp = string; // ISO 8601 format

export type Status = "idle" | "loading" | "success" | "error";

// ============================================================================
// API Response Types
// ============================================================================

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// ============================================================================
// User Types
// ============================================================================

export interface User {
  id: ID;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type UserRole = "student" | "instructor" | "admin";

// ============================================================================
// Course Types
// ============================================================================

export interface Course {
  id: ID;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  instructor: User;
  category: string;
  level: CourseLevel;
  duration: number; // in minutes
  enrollmentCount: number;
  rating: number;
  reviewCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface CourseModule {
  id: ID;
  courseId: ID;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: ID;
  moduleId: ID;
  title: string;
  description: string;
  videoUrl: string;
  duration: number; // in seconds
  order: number;
  isPreview: boolean;
}

// ============================================================================
// Enrollment Types
// ============================================================================

export interface Enrollment {
  id: ID;
  userId: ID;
  courseId: ID;
  progress: number; // 0-100
  completedLessons: ID[];
  enrolledAt: Timestamp;
  lastAccessedAt: Timestamp;
}
