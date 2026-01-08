-- Remove the overly permissive public policy we just added
DROP POLICY IF EXISTS "Public can view team members via public view" ON public.team_members;

-- Drop the SECURITY INVOKER view
DROP VIEW IF EXISTS public.team_members_public;

-- Create a SECURITY DEFINER view that only exposes non-sensitive fields
-- This is safe because the view definition controls exactly which columns are exposed
CREATE VIEW public.team_members_public 
WITH (security_barrier = true) AS
SELECT 
  id,
  name,
  role,
  image_url,
  created_at,
  updated_at
FROM public.team_members;

-- The view owner can select from the table, so grant the view to public roles
GRANT SELECT ON public.team_members_public TO anon;
GRANT SELECT ON public.team_members_public TO authenticated;