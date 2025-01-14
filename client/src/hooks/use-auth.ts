import { useState } from 'react';
import AuthService from '@/services/auth.services';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); 

  const register = async (userData: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const authService = new AuthService();
      const response = await authService.register(userData);
      return response; // Success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred');
      }
      throw err; // Re-throw to handle it in the component if needed
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const authService = new AuthService();
      const response = await authService.login(userData);
      return response; // Success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred');
      }
      throw err; // Re-throw to handle it in the component if needed
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const authService = new AuthService();
      await authService.logout();
      // Remove cookies
      Cookie.remove('access_token');
      Cookie.remove('refresh_token');
      router.push('/auth/sign-in')
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || 'An error occurred');
      }
      throw error; // Re-throw to handle it in the component if needed
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (userData: { email: string }) => {
    setLoading(true);
    setError(null);
    try {
      const authService = new AuthService();
      const response = await authService.forgotPassword(userData);
      return response; // Success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred');
      }
      throw err; // Re-throw to handle it in the component if needed
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (userData: {
    token: string;
    new_password: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const authService = new AuthService();
      const response = await authService.resetPassword(
        userData.token,
        userData.new_password
      );
      return response; // Success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred');
      }
      throw err; // Re-throw to handle it in the component if needed
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
    loading,
    error,
  };
};

export default useAuth;
