import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    if (storedIsAuthenticated) {
      setIsAuthenticated(true);
    } else if (pathname !== "/") {
      router.replace("/");
    }
  }, [pathname, router]);

  return { isAuthenticated, setIsAuthenticated };
};
