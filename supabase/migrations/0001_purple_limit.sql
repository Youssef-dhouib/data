/*
  # Initial schema for website analytics

  1. Tables
    - website_analytics
      - id (uuid, primary key)
      - url (text)
      - metrics (jsonb)
      - seo (jsonb)
      - analytics (jsonb)
      - created_at (timestamp)
*/

CREATE TABLE IF NOT EXISTS website_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  metrics jsonb,
  seo jsonb,
  analytics jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE website_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users"
  ON website_analytics
  FOR SELECT
  TO authenticated
  USING (true);