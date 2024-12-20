import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MD5 from 'crypto-js/md5';

interface LoginProps {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ setIsAdmin, setUsername }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [message, setMessage] = useState<{
    type: 'error' | 'success';
    text: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setIsAdmin(true);
      navigate('/');
    }
  }, [setIsAdmin, navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const hashedPassword = MD5(password).toString();

    const url = `${apiUrl}login.php/?email=${encodeURIComponent(
      email,
    )}&password=${encodeURIComponent(hashedPassword)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      const user = result.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === hashedPassword,
      );

      if (user) {
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', hashedPassword);
          localStorage.setItem('isAdmin', 'true'); // Persist isAdmin
          localStorage.setItem('username', user.username); // Persist username
        }
        setIsAdmin(true);
        setUsername(user.username);
        setMessage({
          type: 'success',
          text: 'Welcome! You are successfully logged in.',
        });

        setTimeout(() => {
          navigate('/'); // Redirect to LogoDisplay
        }, 2000);
      } else {
        const emailExists = result.some(
          (user: { email: string }) => user.email === email,
        );
        const passwordCorrect = result.some(
          (user: { password: string }) => user.password === hashedPassword,
        );

        if (!emailExists) {
          setMessage({
            type: 'error',
            text: 'The email is not correct.',
          });
        } else if (!passwordCorrect) {
          setMessage({
            type: 'error',
            text: 'The password is not correct.',
          });
        } else {
          setMessage({
            type: 'error',
            text: 'Invalid credentials, please try again.',
          });
        }
      }
    } catch (error) {
      console.error(error);
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-50 flex size-full h-screen items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-xl font-bold">
          {message?.type === 'success' ? 'Success!' : 'Login Required'}
        </h2>
        {message && (
          <p
            className={`mb-4 text-base font-bold ${
              message.type === 'error' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {message.text}
          </p>
        )}
        {!message || message.type === 'error' ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark/60"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border-b border-dark/30 py-2 text-base font-medium outline-none focus:border-logo"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-dark/60"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-b border-dark/30 py-2 text-base font-medium outline-none focus:border-logo"
              />
            </div>

            <div className="mb-4">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 accent-logo"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium text-dark/60"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mb-2 mt-5 w-full bg-logo py-3 font-bold text-white hover:bg-logo/80 disabled:bg-logo"
            >
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </button>
          </form>
        ) : (
          <button
            type="button"
            className="mt-3 w-full bg-green-600 py-2 text-white hover:bg-green-700"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;