-- Add file size limits and MIME type restrictions to storage buckets
UPDATE storage.buckets 
SET file_size_limit = 5242880,  -- 5MB limit
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/jpg']
WHERE name IN ('project-images', 'team-images');