import { apiClient } from "@/lib/api/apiClient";
import { Course } from "@/types";

export const coursesService = {
  async getCourses(): Promise<Course[]> {
    // return apiClient.get<Course[]>('/courses');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            title: "Mastering Client Communication",
            description:
              "Learn how to build long-term freelance relationships.",
            thumbnail: "/course-1.jpg",
            price: 500,
            instructor: {
              id: "101",
              name: "Ahmed Kamal",
              role: "instructor",
              email: "",
              createdAt: "",
              updatedAt: "",
            },
            category: "Business",
            level: "beginner",
            duration: 120,
            enrollmentCount: 150,
            rating: 4.8,
            reviewCount: 32,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ]);
      }, 500);
    });
  },

  async getCourseById(id: string): Promise<Course> {
    return apiClient.get<Course>(`/courses/${id}`);
  },
};
