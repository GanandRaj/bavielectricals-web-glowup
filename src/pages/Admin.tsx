import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import ProjectsManager from "@/components/admin/ProjectsManager";
import TeamMembersManager from "@/components/admin/TeamMembersManager";

const ADMIN_PASSWORD = "Mihika@24";
const FORGOT_PASSWORD_DOB = "15-07-1980";

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [dob, setDob] = useState("");
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        setIsAuthenticated(true);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      // Sign in with Supabase using a fixed admin email
      const { error } = await supabase.auth.signInWithPassword({
        email: "admin@amalodhbhavi.com",
        password: ADMIN_PASSWORD,
      });

      if (error) {
        // If user doesn't exist, create it
        if (error.message.includes("Invalid login credentials")) {
          const { error: signUpError } = await supabase.auth.signUp({
            email: "admin@amalodhbhavi.com",
            password: ADMIN_PASSWORD,
          });

          if (signUpError) {
            toast.error("Failed to create admin account");
            return;
          }

          // Try logging in again
          const { error: retryError } = await supabase.auth.signInWithPassword({
            email: "admin@amalodhbhavi.com",
            password: ADMIN_PASSWORD,
          });

          if (retryError) {
            toast.error("Login failed");
            return;
          }
        } else {
          toast.error("Login failed");
          return;
        }
      }

      setIsAuthenticated(true);
      toast.success("Welcome back!");
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dob === FORGOT_PASSWORD_DOB) {
      toast.success(`Your password is: ${ADMIN_PASSWORD}`);
      setShowForgotPassword(false);
      setDob("");
    } else {
      toast.error("Incorrect date of birth");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            {!showForgotPassword ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className="w-full"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </Button>
              </form>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth (as per AADHAR)</Label>
                  <Input
                    id="dob"
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="DD-MM-YYYY"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Verify
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className="w-full"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setDob("");
                  }}
                >
                  Back to Login
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and team members</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="team">Team Members</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="mt-6">
            <ProjectsManager />
          </TabsContent>
          
          <TabsContent value="team" className="mt-6">
            <TeamMembersManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;