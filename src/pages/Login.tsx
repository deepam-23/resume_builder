import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { showError } from "@/utils/toast";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder. In a real app, you'd validate credentials.
    // For now, any login attempt is successful.
    login();
  };

  const handleSocialLogin = () => {
    showError("Social login is not implemented yet. Please add Supabase to enable it.");
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col gap-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
             <Button variant="outline" onClick={handleSocialLogin}>GitHub</Button>
             <Button variant="outline" onClick={handleSocialLogin}>Google</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;