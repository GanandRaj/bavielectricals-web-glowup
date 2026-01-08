-- Add a public SELECT policy back to team_members table
-- This is needed because team_members_public view uses SECURITY INVOKER
-- The view only exposes non-sensitive fields (name, role, image_url)
CREATE POLICY "Public can view team members via public view"
ON public.team_members
FOR SELECT
TO anon, authenticated
USING (true);