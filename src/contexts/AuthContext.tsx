import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserRole = "client" | "artist" | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  loginWithGoogle: () => void;
  logout: () => void;
  setRole: (role: "client" | "artist") => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("indisara_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const persist = (u: User) => {
    setUser(u);
    localStorage.setItem("indisara_user", JSON.stringify(u));
  };

  const login = (email: string, name?: string) => {
    const u: User = {
      id: crypto.randomUUID(),
      name: name || email.split("@")[0],
      email,
      role: null,
      createdAt: new Date().toISOString(),
    };
    persist(u);
  };

  const loginWithGoogle = () => {
    const u: User = {
      id: crypto.randomUUID(),
      name: "Google User",
      email: "user@gmail.com",
      role: null,
      createdAt: new Date().toISOString(),
    };
    persist(u);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("indisara_user");
  };

  const setRole = (role: "client" | "artist") => {
    if (user) {
      const updated = { ...user, role };
      persist(updated);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, loginWithGoogle, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
