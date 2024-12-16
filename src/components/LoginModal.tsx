import React, { useState, useEffect } from 'react';
import MD5 from 'crypto-js/md5';

interface LoginModalProps {
  setShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: React.FC<LoginModalProps> = ({
  setShowLoginPopup,
  setIsLoggedIn,
}) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{
    type: 'error' | 'success';
    text: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setIsLoggedIn(true);
      setShowLoginPopup(false);
    }
  }, [setIsLoggedIn, setShowLoginPopup]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Hash the password using MD5
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
        localStorage.setItem('email', email);
        localStorage.setItem('password', hashedPassword);
        setIsLoggedIn(true);
        setMessage({
          type: 'success',
          text: 'Welcome! You are successfully logged in. You can now download all logos in SVG and PNG format.',
        });
        setTimeout(() => setShowLoginPopup(false), 3000);
      } else {
        setMessage({
          type: 'error',
          text: 'Invalid credentials, please try again.',
        });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="mb-2 mt-5 w-full bg-logo py-2 text-white hover:bg-logo/80 disabled:bg-logo"
            >
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </button>

            <button
              type="button"
              className="w-full bg-gray-200 py-2 hover:bg-gray-300"
              onClick={() => setShowLoginPopup(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <button
            type="button"
            className="mt-3 w-full bg-green-600 py-2 text-white hover:bg-green-700"
            onClick={() => setShowLoginPopup(false)}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
