-- Create storage buckets for images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-images', 'project-images', true);

INSERT INTO storage.buckets (id, name, public) 
VALUES ('team-images', 'team-images', true);

-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  location TEXT,
  date TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create team_members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS (public read access for website, no auth needed for viewing)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Allow public read access for projects
CREATE POLICY "Public can view projects"
ON public.projects
FOR SELECT
USING (true);

-- Allow public read access for team members
CREATE POLICY "Public can view team members"
ON public.team_members
FOR SELECT
USING (true);

-- Allow all operations for authenticated users (admin)
CREATE POLICY "Authenticated users can manage projects"
ON public.projects
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage team members"
ON public.team_members
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Storage policies for project images
CREATE POLICY "Public can view project images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can upload project images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update project images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete project images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'project-images' AND auth.role() = 'authenticated');

-- Storage policies for team images
CREATE POLICY "Public can view team images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'team-images');

CREATE POLICY "Authenticated users can upload team images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'team-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update team images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'team-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete team images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'team-images' AND auth.role() = 'authenticated');

-- Trigger for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at
BEFORE UPDATE ON public.team_members
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();