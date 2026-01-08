-- Drop the overly permissive public SELECT policy
DROP POLICY IF EXISTS "Public can view team members" ON public.team_members;

-- Create a view that only exposes non-sensitive fields for public access
CREATE OR REPLACE VIEW public.team_members_public AS
SELECT 
  id,
  name,
  role,
  image_url,
  created_at,
  updated_at
FROM public.team_members;

-- Grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.team_members_public TO anon;
GRANT SELECT ON public.team_members_public TO authenticated;

-- Create a new restrictive policy: only admins can directly access the full table
-- (The admin policy already exists, so public access is now removed)