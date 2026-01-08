-- Recreate the view with SECURITY INVOKER to address the linter warning
DROP VIEW IF EXISTS public.team_members_public;

CREATE VIEW public.team_members_public 
WITH (security_invoker = true) AS
SELECT 
  id,
  name,
  role,
  image_url,
  created_at,
  updated_at
FROM public.team_members;

-- Re-grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.team_members_public TO anon;
GRANT SELECT ON public.team_members_public TO authenticated;