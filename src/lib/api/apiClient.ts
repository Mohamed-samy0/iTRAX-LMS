/**
 * API Client
 *
 * Centralized HTTP client for all API requests.
 *
 * WHY this architecture:
 * - Single source of truth for API configuration
 * - Automatic error handling
 * - Request/response interceptors
 * - Type-safe responses
 * - Easy to add authentication headers
 */

import { APP_CONSTANTS } from "@/config/constants";
import type { ApiError, ApiResponse } from "@/types";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import Cookies from "js-cookie";

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "",
      timeout: APP_CONSTANTS.API_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  /**
   * Setup request/response interceptors
   */
  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        const token = Cookies.get(APP_CONSTANTS.SESSION_COOKIE_NAME);
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiError>) => {
        if (error.code === "ECONNABORTED") {
          return Promise.reject(new Error("Request timeout"));
        }

        if (error.response?.data) {
          return Promise.reject(error.response.data);
        }

        return Promise.reject(
          new Error(error.message || "An unexpected error occurred")
        );
      }
    );
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<ApiResponse<T>>(endpoint, config);
    return response.data.data;
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.post<ApiResponse<T>>(
      endpoint,
      body,
      config
    );
    return response.data.data;
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.put<ApiResponse<T>>(
      endpoint,
      body,
      config
    );
    return response.data.data;
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.patch<ApiResponse<T>>(
      endpoint,
      body,
      config
    );
    return response.data.data;
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<ApiResponse<T>>(
      endpoint,
      config
    );
    return response.data.data;
  }
}

export const apiClient = new ApiClient();
