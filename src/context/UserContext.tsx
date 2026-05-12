import { createContext, useContext, type ReactNode } from 'react';
import { useLocalStorage } from '@/lib/useLocalStorage';

interface UserState {
  name: string;
  email: string;
  timezone: string;
}

interface UserContextValue extends UserState {
  initials: string;
  updateUser: (updates: Partial<UserState>) => void;
}

const UserContext = createContext<UserContextValue | null>(null);

function deriveInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const DEFAULT_USER: UserState = {
  name: 'Jordan Doe',
  email: 'jordan@example.com',
  timezone: 'America/New_York',
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<UserState>('crescere-user', DEFAULT_USER);

  function updateUser(updates: Partial<UserState>) {
    setUser((prev) => ({ ...prev, ...updates }));
  }

  return (
    <UserContext.Provider value={{ ...user, initials: deriveInitials(user.name), updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
