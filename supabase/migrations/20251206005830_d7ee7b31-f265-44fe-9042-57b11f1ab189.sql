-- Create table for tracking feature clicks
CREATE TABLE public.feature_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  feature_name TEXT NOT NULL,
  use_case TEXT NOT NULL,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for early access signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  feature_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email, feature_name)
);

-- Enable RLS on both tables
ALTER TABLE public.feature_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert feature clicks (public analytics)
CREATE POLICY "Anyone can insert feature clicks" 
ON public.feature_clicks 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to insert early access signups (public form)
CREATE POLICY "Anyone can insert early access signups" 
ON public.early_access_signups 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading with admin access (to be implemented later)
CREATE POLICY "No public read on feature clicks" 
ON public.feature_clicks 
FOR SELECT 
USING (false);

CREATE POLICY "No public read on early access signups" 
ON public.early_access_signups 
FOR SELECT 
USING (false);